import Dropdown from "@/Components/Dropdown";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const layananHukum = [
    {
        value: "hukum-perdata",
        label: "Hukum Perdata",
    },
    {
        value: "hukum-hukum",
        label: "Hukum Hukum",
    },
    {
        value: "hukum-cambuk",
        label: "Hukum Cambuk",
    },
];

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    jenis: z.string(),
    layanan: z.string(),
    message: z.string(),
});

const ServiceForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            jenis: "",
            layanan: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <section className="w-full py-12" id="Form Layanan">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="max-w-screen-lg space-y-4 mx-auto p-12 bg-popover text-popover-foreground rounded-3xl"
                >
                    <h3 className="max-w-lg text-center font-bold text-3xl mx-auto">
                        Lengkapi Formulir Pengajuan Perkara Berikut
                    </h3>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nama Lengkap</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nama Lengkap Anda!"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="layanan"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Layanan Hukum</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            {...field}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih Layanan Hukum" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {layananHukum.map(
                                                    (item, index) => (
                                                        <SelectItem
                                                            key={index}
                                                            value={item.value}
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1">
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
                        </div>

                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="jenis"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jenis Layanan</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            {...field}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih Layanan Hukum" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {layananHukum.map(
                                                    (item, index) => (
                                                        <SelectItem
                                                            key={index}
                                                            value={item.value}
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nomor Handphone</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="6280123456789"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="jenis"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jenis Layanan</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            {...field}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih Layanan Hukum" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {layananHukum.map(
                                                    (item, index) => (
                                                        <SelectItem
                                                            key={index}
                                                            value={item.value}
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pesan</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tuliskan pesan Anda"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Kirim
                    </Button>
                </form>
            </Form>
        </section>
    );
};

export default ServiceForm;
