import Layout from "@/Layouts/Layout";
import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import CallToAction from "./components/CallToAction";
import { Head } from "@inertiajs/react";

const page = () => {
    return (
        <Layout>
            <Head title="Tentang Kami" />
            <Hero />
            <Service />
            <CallToAction />
        </Layout>
    );
};

export default page;
