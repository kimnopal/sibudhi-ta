import { Input } from "@/Components/ui/input";
import Layout from "@/Layouts/Layout";
import { ourAdvocates } from "./data";
import AdvocateCard from "./components/AdvocateCard";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

const page = () => {
    const [search, setSearch] = useState<string>("");
    const [advocates, setAdvocates] = useState<any>();

    useEffect(() => {
        (async () => {
            const res = await fetch("/consultation/data");
            const json = await res.json();
            setAdvocates(json);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch("/consultation/data?search=" + search);
            const json = await res.json();
            setAdvocates(json);
        })();
    }, [search]);

    return (
        <Layout>
            <section className="container max-w-screen-lg space-y-8 py-16">
                <h1 className="font-bold text-3xl">
                    Temukan Advokat Pilihanmu
                </h1>
                <Input
                    placeholder="Cari advokat"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    value={search}
                />
                <div className="flex md:grid flex-col md:grid-cols-2 gap-4 md:gap-8">
                    {advocates &&
                        advocates.map((advocate: any) => (
                            <AdvocateCard
                                key={advocate.id}
                                name={advocate.name}
                                experience={advocate.experience}
                                almamater={advocate.university}
                                domicile={advocate.domicile}
                                no_handphone={advocate.no_handphone}
                                image={advocate.image}
                                expertises={advocate.expertises}
                            />
                        ))}
                </div>
            </section>
        </Layout>
    );
};

export default page;
