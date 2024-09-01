import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import React from "react";

const CallToAction = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-8 bg-subtle py-12 my-8">
            <h2 className="font-bold text-2xl md:text-3xl text-center">
                Tunggu apalagi?
                <br />
                Ayo bergabung dengan kami!
            </h2>
            <Link href="/register">
                <Button>Daftar Disini</Button>
            </Link>
        </section>
    );
};

export default CallToAction;
