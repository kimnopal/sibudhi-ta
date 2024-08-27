import ValueItem from "./ValueItem";
import { BadgeCheck, MousePointerClick, Scale, Zap } from "lucide-react";

const ourValues = [
    {
        title: "Tim Ahli Berpengalaman",
        description:
            "Tim ahli hukum kami terdiri dari profesional dan berpengalaman yang siap memberikan solusi terbaik untuk masalah hukum Anda.",
        icon: BadgeCheck,
    },
    {
        title: "Tim Ahli Berpengalaman",
        description:
            "Tim ahli hukum kami terdiri dari profesional dan berpengalaman yang siap memberikan solusi terbaik untuk masalah hukum Anda.",
        icon: Scale,
    },
    {
        title: "Tim Ahli Berpengalaman",
        description:
            "Tim ahli hukum kami terdiri dari profesional dan berpengalaman yang siap memberikan solusi terbaik untuk masalah hukum Anda.",
        icon: MousePointerClick,
    },
    {
        title: "Tim Ahli Berpengalaman",
        description:
            "Tim ahli hukum kami terdiri dari profesional dan berpengalaman yang siap memberikan solusi terbaik untuk masalah hukum Anda.",
        icon: Zap,
    },
];

const Value = () => {
    return (
        <section className="w-full bg-subtle">
            <div className="container max-w-screen-lg flex flex-col gap-14 justify-start items-center py-24">
                <h2 className="font-bold text-3xl">Mengapa memilih SiBudhi?</h2>
                <div className="flex-1 w-full flex flex-col md:flex-row justify-between items-start gap-12">
                    {ourValues.map((value, index) => (
                        <ValueItem
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Value;
