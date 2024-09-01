import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const formSchema = z.object({
    nama: z
        .string({ message: "" })
        .min(2, { message: "" })
        .max(50, { message: "" }),
    email: z
        .string({ message: "" })
        .email({ message: "" })
        .min(2, { message: "" })
        .max(50, { message: "" }),
    nik: z
        .string({ message: "" })
        .min(16, { message: "" })
        .max(16, { message: "" })
        .regex(/\d+/),
    password: z
        .string({
            message: "",
        })
        .min(8, {
            message: "",
        })
        .max(50, { message: "" }),
});

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: "",
            email: "",
            nik: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post("/register", values);
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <h2 className="font-bold text-xl text-center container">
                Daftar Sekarang! <br /> Dapatkan Layanan Hukum Terbaik!
            </h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-sm flex flex-col gap-4 container"
                >
                    <FormField
                        control={form.control}
                        name="nama"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Tuliskan nama lengkapp anda"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Tuliskan email anda"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nik"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>NIK</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Tuliskan NIK anda"
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
                                        placeholder="Tuliskan password anda"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Daftar</Button>
                    <p className="font-medium text-center">
                        Sudah memiliki akun?{" "}
                        <Link href="/login" className="text-secondary">
                            Masuk Disini
                        </Link>
                    </p>
                </form>
            </Form>
        </GuestLayout>
    );
}
