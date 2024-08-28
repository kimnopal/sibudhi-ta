import { Input } from "@/Components/ui/input";
import Layout from "@/Layouts/Layout";
import { ourAdvocates } from "./data";
import AdvocateCard from "./components/AdvocateCard";
import { useState } from "react";

const page = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout>
            <section className="container max-w-screen-lg space-y-8 py-16">
                <h1 className="font-bold text-3xl">
                    Temukan Advokat Pilihanmu
                </h1>
                <Input
                    placeholder="Cari advokat"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    {ourAdvocates
                        .filter((item) =>
                            item.name.toLowerCase().includes(search)
                        )
                        .map((advocate, index) => (
                            <AdvocateCard
                                key={index}
                                name={advocate.name}
                                experience={advocate.experience}
                                almamater={advocate.almamater}
                                domicile={advocate.domicile}
                                image_url={advocate.image_url}
                                expertises={advocate.expertises}
                            />
                        ))}
                </div>
            </section>
        </Layout>
    );
};

export default page;
