import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import React from "react";

interface ServiceSectionProps {
    title: string;
    description: string;
    image: string;
    href: string;
}

const OddService = (props: ServiceSectionProps) => {
    return (
        <section className="w-full py-12" id={props.title}>
            <div className="container max-w-screen-lg flex justify-between items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="font-bold text-3xl">{props.title}</h2>
                    <p className="font-medium text-justify">
                        {props.description}
                    </p>
                    <Link href={props.href}>
                        <Button>Konsultasi Sekarang</Button>
                    </Link>
                </div>
                <div className="flex-1">
                    <img src={props.image} alt={props.title} className="" />
                </div>
            </div>
        </section>
    );
};

const EvenService = (props: ServiceSectionProps) => {
    return (
        <section className="w-full py-12" id={props.title}>
            <div className="container max-w-screen-lg flex flex-row-reverse justify-between items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="font-bold text-3xl">{props.title}</h2>
                    <p className="font-medium text-justify">
                        {props.description}
                    </p>
                    <Link href={props.href}>
                        <Button>Konsultasi Sekarang</Button>
                    </Link>
                </div>
                <div className="flex-1">
                    <img src={props.image} alt={props.title} className="" />
                </div>
            </div>
        </section>
    );
};

export { OddService, EvenService };
