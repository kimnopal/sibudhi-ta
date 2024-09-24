import { format } from "date-fns/format";
import { Submission } from "../data";
import { Button } from "@/Components/ui/button";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { Separator } from "@/Components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/Components/ui/alert-dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { useEffect, useState } from "react";

interface SubmissionDisplayProps {
    submission: Submission | null;
    services: any
}

const SubmissionDisplay = ({ submission, services }: SubmissionDisplayProps) => {
    const { auth, session }: any = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [currentSub, setCurrentSub] = useState<Submission | null>(submission);

    useEffect(() => {
        setData({
            name: submission?.name,
            email: submission?.email,
            no_handphone: submission?.no_handphone,
            service_id: submission?.service_id.toString(),
            service_type_id: submission?.service_type_id?.toString(),
            description: submission?.description,
            status: submission?.status,
        })
    }, [submission, showAlert]);

    const { data, setData, put, errors, reset } = useForm<any>({
        name: "",
        email: "",
        no_handphone: "",
        service_id: "",
        service_type_id: "",
        description: "",
        status: "",
    });

    const onSubmit = (e: any) => {
        e.preventDefault();
        put("/reports/" + submission?.id, {
            preserveScroll: true,
            onSuccess: function () {
                setShowModal(false);
                setShowAlert(true);
                reset();
            },
        });
    };

    const handleDelete = () => {
        router.delete("/reports/" + submission?.id, {
            onSuccess: function () {
                setShowAlert(true);
            },
        });
    }

    return (
        <>
            <div className="flex h-full flex-col">
                <div className="hidden md:flex items-center justify-end p-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                disabled={!submission}
                            >
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">More</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex gap-3 justify-content items-center" onClick={() => setShowModal(true)}><Edit width={16} />Edit</DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 justify-content items-center text-red-500 focus:text-red-500" onClick={handleDelete}><Trash2 width={16} />Hapus</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Separator className="hidden md:block" />
                {submission ? (
                    <div className="flex flex-1 flex-col">
                        <div className="flex flex-col md:flex-row items-start p-4">
                            <div className="flex flex-col md:flex-row items-start gap-4 text-sm">
                                <Avatar>
                                    <AvatarImage alt={submission.name} />
                                    <AvatarFallback>
                                        {submission.name
                                            .split(" ")
                                            .map((chunk) => chunk[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="font-semibold text-base">
                                        {submission.name}
                                    </div>
                                    <div className="line-clamp-1 text-xs">
                                        {submission.email}
                                    </div>
                                    <div className="line-clamp-1 text-xs font-semibold">
                                        {submission.service.name}
                                    </div>
                                </div>
                            </div>
                            {submission.created_at && (
                                <div className="md:ml-auto text-xs text-muted-foreground">
                                    {format(
                                        new Date(submission.created_at),
                                        "PPpp"
                                    )}
                                </div>
                            )}
                        </div>
                        <Separator />
                        <div className="whitespace-pre-wrap p-4 text-sm">
                            {submission.description}
                        </div>

                        {auth.user.role == "advocate" ? (
                            <a
                                href={`https://wa.me/${submission.no_handphone}`}
                                target="_blank"
                                className="p-4"
                            >
                                <Button className="w-full">
                                    Contact via WhatsApp
                                </Button>
                            </a>
                        ) : null}
                    </div>
                ) : (
                    <div className="p-8 text-center text-muted-foreground">
                        No message selected
                    </div>
                )}
            </div>
            <AlertDialog open={showModal} onOpenChange={setShowModal}>
                <AlertDialogContent className="rounded-lg bg-white md:w-[700px] max-w-full">
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            {/* {session.error
                        ? session.error[0]
                        : session.success[0]} */}
                            Edit Laporan Perkara
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                        {/* {session.error
                    ? session.error[1]
                    : session.success[1]} */}
                        <form
                            onSubmit={onSubmit}
                            className="max-w-screen-[1000px] space-y-4 mx-auto bg-popover text-popover-foreground rounded-3xl"
                        >
                            {/* <h3 className="max-w-lg text-center font-bold text-3xl mx-auto text-primary">
                                Lengkapi Formulir Pengajuan Perkara Berikut
                            </h3> */}

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
                                            className={`${errors.service_id && "text-red-500"
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
                                                className={`${errors.service_id && "border-red-500"
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
                                            onChange={(e: any) =>
                                                setData("email", e.target.value)
                                            }
                                            className={`${errors.email && "border-red-500"
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="service_type_id"
                                            className={`${errors.service_type_id && "text-red-500"
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
                                                className={`${errors.service_type_id &&
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
                                            className={`${errors.no_handphone && "text-red-500"
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
                                            className={`${errors.no_handphone && "border-red-500"
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
                                                className={`${errors.status && "border-red-500"
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

                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" className="border-primary bg-white text-primary hover:bg-primary hover:text-white" onClick={() => setShowModal(false)}>Batal</Button>
                                <Button type="submit" className="">
                                    Simpan
                                </Button>
                            </div>
                        </form>
                    </AlertDialogDescription>
                </AlertDialogContent>
            </AlertDialog>
            {session.error || session.success ? (
                <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
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
        </>
    );
};

export default SubmissionDisplay;
