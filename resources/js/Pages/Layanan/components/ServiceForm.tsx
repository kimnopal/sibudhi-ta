import Dropdown from "@/Components/Dropdown";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { z } from "zod";

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    no_handphone: z.string(),
    service_id: z.string(),
    service_type_id: z.string(),
    description: z.string(),
    status: z.string(),
});

const ServiceForm = ({ services }: any) => {
    const [showModal, setShowModal] = useState(true);
    const { session }: any = usePage().props;

    const { data, setData } = useForm({
        name: "",
        email: "",
        no_handphone: "",
        service_id: "",
        service_type_id: "",
        description: "",
        status: "",
    });

    console.log(session);

    // useEffect(() => {
    //     console.log(data.service_id ? true : false);
    //     console.log(
    //         services[Number(data.service_id) - 1]?.service_types ? true : false
    //     );
    //     console.log(data.service_id);
    //     console.log(services[Number(data.service_id) - 1].service_types);
    // }, [data.service_id]);

    const onSubmit = async () => {
        // router.post("/reports", values, {
        //     preserveScroll: true,
        //     onSuccess: function () {
        //         setShowModal(true);
        //     },
        // });
    };

    return (
        <section className="w-full py-12" id="Form Layanan">
            <form
                onSubmit={onSubmit}
                className="max-w-screen-lg space-y-4 mx-auto p-12 bg-popover text-popover-foreground rounded-3xl"
            >
                <h3 className="max-w-lg text-center font-bold text-3xl mx-auto">
                    Lengkapi Formulir Pengajuan Perkara Berikut
                </h3>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                            >
                                Nama Lengkap
                            </Label>
                            <Input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Nama Lengkap Anda!"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label htmlFor="service_id">Layanan Hukum</Label>
                            <Select
                                onValueChange={(e) => setData("service_id", e)}
                                name="service_id"
                                value={data.service_id}
                            >
                                <SelectTrigger>
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
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    placeholder="yourname@example.com"
                                    name="email"
                                    type="email"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label htmlFor="service_type_id">
                                Jenis Layanan
                            </Label>
                            <Select
                                name="service_type_id"
                                value={data.service_type_id}
                                onValueChange={(e) =>
                                    setData("service_type_id", e)
                                }
                            >
                                <SelectTrigger>
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
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label htmlFor="no_handphone">
                                Nomor Handphone
                            </Label>
                            <Input
                                placeholder="6280123456789"
                                name="no_handphone"
                                type="text"
                                value={data.no_handphone}
                                onChange={(e) =>
                                    setData("no_handphone", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                name="status"
                                value={data.status}
                                onValueChange={(e) => setData("status", e)}
                            >
                                <SelectTrigger>
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
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                        placeholder="Tuliskan pesan Anda"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>

                <Button type="submit" className="w-full">
                    Kirim
                </Button>
            </form>

            {session.error || session.success ? (
                <AlertDialog open={showModal} onOpenChange={setShowModal}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Informasi</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription>
                            {session.error || session.success}
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ) : null}
        </section>
    );
};

export default ServiceForm;
