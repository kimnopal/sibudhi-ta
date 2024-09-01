import React from "react";
import ServiceItem from "./ServiceItem";
import { Building2, Gavel, Landmark, MessagesSquare } from "lucide-react";

const ourServices = [
    {
        title: "Konsultasi Hukum",
        description:
            "Kami siap memberikan konsultasi hukum untuk menyelesaikan masalah hukum Anda.",
        icon: MessagesSquare,
    },
    {
        title: "Pembuatan Dokumen Hukum",
        description:
            "Kami menyediakan jasa pembuatan dokumen hukum yang Anda butuhkan.",
        icon: Building2,
    },
    {
        title: "Mediasi",
        description:
            "Kami siap membantu Anda dalam proses mediasi untuk menyelesaikan masalah hukum Anda.",
        icon: Gavel,
    },
    {
        title: "Pendampingan Hukum",
        description:
            "Kami siap memberikan pendampingan hukum untuk menyelesaikan masalah hukum Anda.",
        icon: Landmark,
    },
];

const Service = () => {
    return (
        <section className="w-full">
            <div className="container max-w-screen-lg flex flex-col gap-14 justify-start items-center py-14">
                <div className="text-center space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-center">
                        Layanan Hukum yang Kami Tawarkan
                    </h2>
                    <p className="font-medium text-base lg:text-lg">
                        “Kami menyediakan berbagai layanan hukum untuk membantu
                        Anda mengatasi berbagai masalah hukum dengan cepat dan
                        efisien.”
                    </p>
                </div>
                <div className="flex-1 flex md:grid flex-col md:grid-cols-2 justify-between items-start gap-5">
                    {ourServices.map((service, index) => (
                        <ServiceItem
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
