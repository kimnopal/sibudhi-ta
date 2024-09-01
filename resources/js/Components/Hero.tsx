import React from "react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

const Hero = () => {
    return (
        <section className="container max-w-screen-lg flex flex-col-reverse md:flex-row justify-between items-center gap-10  md:gap-0 py-14">
            <div className="flex-1 flex flex-col space-y-8">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Solusi Cepat untuk Pengaduan Hukum Anda
                    </h1>
                    <p className="font-medium text-base mt-4">
                        Kami siap mendengarkan dan membantu menyelesaikan
                        masalah Anda.
                    </p>
                </div>
                <Link href="/consultation">
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
