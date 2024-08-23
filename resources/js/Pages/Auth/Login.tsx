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
<<<<<<< HEAD
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
=======

            <h2 className="font-bold text-xl text-center">
                Selamat Datang Kembali! <br /> Akses Layanan Hukum Anda dengan
                Mudah dan Cepat
            </h2>
>>>>>>> 131688a3af68c95daf7b676308d4f6d4bae2b0a9

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
<<<<<<< HEAD
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
=======
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
>>>>>>> 131688a3af68c95daf7b676308d4f6d4bae2b0a9
                    />
                    <FormField
                        control={form.control}
                        name="password"
<<<<<<< HEAD
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={"/"}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
=======
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
>>>>>>> 131688a3af68c95daf7b676308d4f6d4bae2b0a9
        </GuestLayout>
    );
}
