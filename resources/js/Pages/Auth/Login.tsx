import { FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { Label } from "@/Components/ui/label";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post } = useForm({
        email: "",
        password: "",
    });

    const { session }: any = usePage().props;

    async function onSubmit(e: any) {
        e.preventDefault();
        post("/login", {
            preserveScroll: true,
            onSuccess: function () {
                setShowModal(true);
            },
        });
    }

    return (
        <GuestLayout>
            <Head title="Masuk" />

            <h2 className="font-bold text-xl text-center container">
                Selamat Datang Kembali! <br /> Akses Layanan Hukum Anda dengan
                Mudah dan Cepat
            </h2>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form
                onSubmit={onSubmit}
                className="w-full max-w-sm flex flex-col gap-4 container"
            >
                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className={`${errors.email && "text-red-500"}`}
                    >
                        Email
                    </Label>
                    <Input
                        placeholder="yourname@example.com"
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={(e: any) => setData("email", e.target.value)}
                        className={`${errors.email && "border-red-500"}`}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label
                        className={`${errors.password && "text-red-500"}`}
                        htmlFor="password"
                    >
                        Password
                    </Label>
                    <Input
                        className={`${errors.password && "border-red-500"}`}
                        placeholder="********"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                    />

                    {errors.password && (
                        <p className="text-sm text-red-500">
                            {errors.password}
                        </p>
                    )}
                </div>

                <p className="text-sm flex justify-end font-medium text-secondary">
                    <Link href="/">Lupa Password?</Link>
                </p>
                <Button type="submit">Masuk</Button>
                <p className="font-medium text-center">
                    Belum memiliki akun?{" "}
                    <Link href="/register" className="text-secondary">
                        Daftar Disini
                    </Link>
                </p>
            </form>

            {session.error || session.success ? (
                <AlertDialog open={showModal} onOpenChange={setShowModal}>
                    <AlertDialogContent className="w-[90%] rounded-lg">
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                {session.error
                                    ? session.error[0]
                                    : session.success[0]}
                            </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription>
                            {session.error
                                ? session.error[1]
                                : session.success[1]}
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogAction>Tutup</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ) : null}
        </GuestLayout>
    );
}
