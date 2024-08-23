import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            <h2 className="font-bold text-xl text-center">
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
                    className="w-full max-w-sm flex flex-col gap-4"
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
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end font-medium text-secondary">
                        <Link href="/">Lupa Password?</Link>
                    </div>
                    <Button type="submit">Masuk</Button>
                    <p className="font-medium text-center">
                        Belum memiliki akun?{" "}
                        <span className="text-secondary">Daftar Disini</span>
                    </p>
                </form>
            </Form>
        </GuestLayout>
    );
}
