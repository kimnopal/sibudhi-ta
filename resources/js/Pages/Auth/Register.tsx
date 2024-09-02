import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

export default function Register() {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        nik: "",
        password: "",
    });

    const { session }: any = usePage().props;

    function onSubmit(e: any) {
        e.preventDefault();
        post("/register", {
            preserveScroll: true,
            onSuccess: function () {
                setShowModal(true);
            },
        });
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <h2 className="font-bold text-xl text-center container">
                Daftar Sekarang! <br /> Dapatkan Layanan Hukum Terbaik!
            </h2>

            <form
                onSubmit={onSubmit}
                className="w-full max-w-sm flex flex-col gap-4 container"
            >
                <div className="space-y-2">
                    <Label
                        htmlFor="name"
                        className={`${errors.name && "text-red-500"}`}
                    >
                        Nama Lengkap
                    </Label>
                    <Input
                        placeholder="Nama Lengkap"
                        name="name"
                        type="name"
                        value={data.name}
                        onChange={(e: any) => setData("name", e.target.value)}
                        className={`${errors.name && "border-red-500"}`}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className={`${errors.email && "text-red-500"}`}
                    >
                        Email
                    </Label>
                    <Input
                        placeholder="namalengkap@contoh.com"
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
                        htmlFor="nik"
                        className={`${errors.nik && "text-red-500"}`}
                    >
                        NIK
                    </Label>
                    <Input
                        placeholder="1234567890"
                        name="nik"
                        type="nik"
                        value={data.nik}
                        onChange={(e: any) => setData("nik", e.target.value)}
                        className={`${errors.nik && "border-red-500"}`}
                    />
                    {errors.nik && (
                        <p className="text-sm text-red-500">{errors.nik}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="password"
                        className={`${errors.password && "text-red-500"}`}
                    >
                        Password
                    </Label>
                    <Input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={(e: any) =>
                            setData("password", e.target.value)
                        }
                        className={`${errors.password && "border-red-500"}`}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">
                            {errors.password}
                        </p>
                    )}
                </div>
                <Button type="submit">Daftar</Button>
                <p className="font-medium text-center">
                    Sudah memiliki akun?{" "}
                    <Link href="/login" className="text-secondary">
                        Masuk Disini
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
