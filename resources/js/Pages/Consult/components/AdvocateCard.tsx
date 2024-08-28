import { Badge } from "@/Components/ui/badge";
import { Button } from "@headlessui/react";
import { BriefcaseBusiness, GraduationCap, Link, MapPin } from "lucide-react";
import React from "react";

interface AdvocateCardProps {
    name: string;
    experience: number;
    almamater: string;
    domicile: string;
    image_url: string;
    expertises: string[];
}

const AdvocateCard = (advocate: AdvocateCardProps) => {
    return (
        <div className="max-h-72 flex justify-center items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={advocate.image_url}
                alt={advocate.name}
                className="h-full aspect-[2/3] rounded-lg object-cover"
            />
            <div className="h-full w-full flex-1 flex flex-col justify-between items-start p-4">
                <h3 className="font-bold text-xl">{advocate.name}</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                        <BriefcaseBusiness />
                        <span className="font-medium">
                            Pengalaman {advocate.experience} Tahun
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GraduationCap />
                        <span className="font-medium">
                            {advocate.almamater}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin />
                        <span className="font-medium">{advocate.domicile}</span>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                    {advocate.expertises.map((expertise, index) => (
                        <Badge
                            key={index}
                            variant="default"
                            className="bg-subtle text-secondary rounded-sm"
                        >
                            {expertise}
                        </Badge>
                    ))}
                </div>
                <Link href={""}>
                    <Button>Konsultasi</Button>
                </Link>
            </div>
        </div>
    );
};

export default AdvocateCard;
