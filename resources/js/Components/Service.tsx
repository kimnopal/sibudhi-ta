import React from "react";
import ServiceItem from "./ServiceItem";

const ourServices = [
    {
        title: "Konsultasi Hukum",
        description:
            "Kami siap memberikan konsultasi hukum untuk menyelesaikan masalah hukum Anda.",
        image: "./images/icons/messages-square.svg",
    },
    {
        title: "Pembuatan Dokumen Hukum",
        description:
            "Kami menyediakan jasa pembuatan dokumen hukum yang Anda butuhkan.",
        image: "./images/icons/building.svg",
    },
    {
        title: "Mediasi",
        description:
            "Kami siap membantu Anda dalam proses mediasi untuk menyelesaikan masalah hukum Anda.",
        image: "./images/icons/gavel.svg",
    },
    {
        title: "Pendampingan Hukum",
        description:
            "Kami siap memberikan pendampingan hukum untuk menyelesaikan masalah hukum Anda.",
        image: "./images/icons/landmark.svg",
    },
];

const Service = () => {
    return (
        <section className="w-full">
            <div className="container max-w-screen-lg flex flex-col gap-14 justify-start items-center py-24">
                <div className="text-center space-y-12">
                    <h2 className="font-bold text-3xl">
                        Mengapa memilih SiBudhi?
                    </h2>
                    <p className="font-medium text-2xl">
                        “Kami menyediakan berbagai layanan hukum untuk membantu
                        Anda mengatasi berbagai masalah hukum dengan cepat dan
                        efisien.”
                    </p>
                </div>
                <div className="flex-1 container flex md:grid flex-col md:grid-cols-2 justify-between items-start gap-5">
                    {ourServices.map((service, index) => (
                        <ServiceItem
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
