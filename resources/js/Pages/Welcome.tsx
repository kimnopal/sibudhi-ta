import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import Hero from "@/Components/Hero";
import Value from "@/Components/Value";
import Service from "@/Components/Service";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <Layout>
            <Head title="Welcome" />
            <Hero />
            <Value />
            <Service />
        </Layout>
    );
}
