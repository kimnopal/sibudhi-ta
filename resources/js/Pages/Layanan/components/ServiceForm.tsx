import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

const ServiceForm = ({ services }: any) => {
    const [showModal, setShowModal] = useState(true);
    const { session }: any = usePage().props;

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        no_handphone: "",
        service_id: "",
        service_type_id: "",
        description: "",
        status: "",
    });
    console.log(session);

    const onSubmit = (e: any) => {
        e.preventDefault();
        post("/reports", {
            preserveScroll: true,
            onSuccess: function () {
                reset();
            },
        });
    };

    return (
        <section className="w-full py-10" id="form-layanan">
            <form
                onSubmit={onSubmit}
                className="max-w-screen-lg container space-y-4 py-10 mx-auto bg-popover text-popover-foreground rounded-3xl"
            >
                <h3 className="max-w-lg text-center font-bold text-3xl mx-auto text-primary">
                    Lengkapi Formulir Pengajuan Perkara Berikut
                </h3>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                className={`${errors.name && "text-red-500"}`}
                                htmlFor="name"
                            >
                                Nama Lengkap
                            </Label>
                            <Input
                                className={`${errors.name && "border-red-500"}`}
                                placeholder="Nama Lengkap Anda!"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e: any) =>
                                    setData("name", e.target.value)
                                }
                            />

                            {errors.name && (
                                <p className="text-sm text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                htmlFor="service_id"
                                className={`${
                                    errors.service_id && "text-red-500"
                                }`}
                            >
                                Layanan Hukum
                            </Label>
                            <Select
                                onValueChange={(e) => setData("service_id", e)}
                                name="service_id"
                                value={data.service_id}
                            >
                                <SelectTrigger
                                    className={`${
                                        errors.service_id && "border-red-500"
                                    }`}
                                >
                                    <SelectValue placeholder="Pilih Layanan Hukum" />
                                </SelectTrigger>
                                <SelectContent>
                                    {services?.map((service: any) => (
                                        <SelectItem
                                            key={service.id}
                                            value={service.id.toString()}
                                        >
                                            {service.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.service_id && (
                                <p className="text-sm text-red-500">
                                    {errors.service_id}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className={`${
                                        errors.email && "text-red-500"
                                    }`}
                                >
                                    Email
                                </Label>
                                <Input
                                    placeholder="yourname@example.com"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e: any) =>
                                        setData("email", e.target.value)
                                    }
                                    className={`${
                                        errors.email && "border-red-500"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                htmlFor="service_type_id"
                                className={`${
                                    errors.service_type_id && "text-red-500"
                                }`}
                            >
                                Jenis Layanan
                            </Label>
                            <Select
                                name="service_type_id"
                                value={data.service_type_id}
                                onValueChange={(e) =>
                                    setData("service_type_id", e)
                                }
                            >
                                <SelectTrigger
                                    className={`${
                                        errors.service_type_id &&
                                        "border-red-500"
                                    }`}
                                >
                                    <SelectValue placeholder="Pilih Layanan Hukum" />
                                </SelectTrigger>
                                <SelectContent>
                                    {data.service_id ? (
                                        services[Number(data.service_id) - 1]
                                            .service_types.length != 0 ? (
                                            services[
                                                Number(data.service_id) - 1
                                            ].service_types.map(
                                                (service_type: any) => (
                                                    <SelectItem
                                                        key={service_type.id}
                                                        value={service_type.id.toString()}
                                                    >
                                                        {service_type.name}
                                                    </SelectItem>
                                                )
                                            )
                                        ) : (
                                            <SelectItem
                                                key={0}
                                                value={"0"}
                                                disabled
                                            >
                                                Tidak ada data
                                            </SelectItem>
                                        )
                                    ) : (
                                        <SelectItem
                                            key={0}
                                            value={"0"}
                                            disabled
                                        >
                                            Tidak ada data
                                        </SelectItem>
                                    )}
                                </SelectContent>
                            </Select>
                            {errors.service_type_id && (
                                <p className="text-sm text-red-500">
                                    {errors.service_type_id}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                htmlFor="no_handphone"
                                className={`${
                                    errors.no_handphone && "text-red-500"
                                }`}
                            >
                                Nomor Handphone
                            </Label>
                            <Input
                                placeholder="6280123456789"
                                name="no_handphone"
                                type="text"
                                value={data.no_handphone}
                                onChange={(e: any) =>
                                    setData("no_handphone", e.target.value)
                                }
                                className={`${
                                    errors.no_handphone && "border-red-500"
                                }`}
                            />
                            {errors.no_handphone && (
                                <p className="text-sm text-red-500">
                                    {errors.no_handphone}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                htmlFor="status"
                                className={`${errors.status && "text-red-500"}`}
                            >
                                Status
                            </Label>
                            <Select
                                name="status"
                                value={data.status}
                                onValueChange={(e) => setData("status", e)}
                            >
                                <SelectTrigger
                                    className={`${
                                        errors.status && "border-red-500"
                                    }`}
                                >
                                    <SelectValue placeholder="Pilih Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value={"penggugat"}>
                                        Penggugat
                                    </SelectItem>
                                    <SelectItem value={"tergugat"}>
                                        Tergugat
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.status && (
                                <p className="text-sm text-red-500">
                                    {errors.status}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="description"
                        className={`${errors.description && "text-red-500"}`}
                    >
                        Deskripsi
                    </Label>
                    <Textarea
                        placeholder="Tuliskan pesan Anda"
                        name="description"
                        value={data.description}
                        onChange={(e: any) =>
                            setData("description", e.target.value)
                        }
                        className={`${errors.description && "border-red-500"}`}
                    />
                    {errors.description && (
                        <p className="text-sm text-red-500">
                            {errors.description}
                        </p>
                    )}
                </div>

                <Button type="submit" className="w-full">
                    Kirim
                </Button>
            </form>

            {session.error || session.success ? (
                <AlertDialog open={showModal} onOpenChange={setShowModal}>
                    <AlertDialogContent>
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
        </section>
    );
};

export default ServiceForm;
