import ValueItem from "./ValueItem";
import { BadgeCheck, MousePointerClick, Scale, Zap } from "lucide-react";

const ourValues = [
    {
        title: "Tim Ahli Berpengalaman",
        description:
            "Tim ahli hukum kami terdiri dari profesional dan berpengalaman yang siap memberikan solusi terbaik untuk masalah hukum Anda.",
        icon: BadgeCheck,
    },
    {
        title: "Layanan Komprehensif",
        description:
            "Kami menawarkan berbagai layanan hukum mulai dari konsultasi hingga pembuatan dokumen persidangan untuk kasus perdata, pidana, dan tata usaha negara.",
        icon: Scale,
    },
    {
        title: "Kemudahan Pengguna",
        description:
            "Platform kami dirancang untuk memudahkan Anda dalam mengajukan pengaduan hukum dan mendapatkan bantuan yang Anda butuhkan tanpa harus keluar rumah.",
        icon: MousePointerClick,
    },
    {
        title: "Respon Cepat",
        description:
            "Kami memahami bahwa masalah hukum seringkali memerlukan penanganan cepat. Oleh karena itu, kami berkomitmen untuk memberikan respon secepat mungkin.",
        icon: Zap,
    },
];

const Value = () => {
    return (
        <section className="w-full bg-subtle">
            <div className="container max-w-screen-lg flex flex-col gap-14 justify-start items-center py-20">
                <h2 className="font-bold text-3xl text-center">
                    Mengapa memilih SiBudhi?
                </h2>
                <div className="flex-1 w-full flex flex-col md:flex-row justify-between items-start gap-12">
                    {ourValues.map((value, index) => (
                        <ValueItem
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Value;
