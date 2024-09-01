import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router } from "@inertiajs/react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/Components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const formSchema = z.object({
    email: z
        .string({ message: "" })
        .email({ message: "" })
        .min(2, { message: "" })
        .max(50, { message: "" }),
    password: z
        .string({
            message: "",
        })
        .min(8, {
            message: "",
        })
        .max(50, { message: "" }),
});

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/login", values);
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            <h2 className="font-bold text-xl text-center container">
                Selamat Datang Kembali! <br /> Akses Layanan Hukum Anda dengan
                Mudah dan Cepat
            </h2>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-sm flex flex-col gap-4 container"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="yourname@example.com"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="********"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="flex justify-end font-medium text-secondary">
                                    <Link href="/">Lupa Password?</Link>
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Masuk</Button>
                    <p className="font-medium text-center">
                        Belum memiliki akun?{" "}
                        <Link href="/register" className="text-secondary">
                            Daftar Disini
                        </Link>
                    </p>
                </form>
            </Form>
        </GuestLayout>
    );
}
