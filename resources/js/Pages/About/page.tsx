import Layout from "@/Layouts/Layout";
import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import CallToAction from "./components/CallToAction";

const page = () => {
    return (
        <Layout>
            <Hero />
            <Service />
            <CallToAction />
        </Layout>
    );
};

export default page;
