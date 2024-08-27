import React from "react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

const Hero = () => {
    return (
        <section className="container max-w-screen-lg flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-0 py-36">
            <div className="flex-1 flex flex-col space-y-12">
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold">
                        Solusi Cepat untuk Pengaduan Hukum Anda
                    </h1>
                    <p className="font-medium text-lg mt-4">
                        Kami siap mendengarkan dan membantu menyelesaikan
                        masalah Anda.
                    </p>
                </div>
                <Link href="/register">
                    <Button variant="secondary">Ajukan Konsultasi</Button>
                </Link>
            </div>

            <div className="flex-1 flex justify-end items-center">
                <img
                    src="./images/icons/Lawyer-pana.png"
                    alt="Hero Image"
                    className="object-fit w-fit h-fit"
                />
            </div>
        </section>
    );
};

export default Hero;
