import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import React from "react";

interface expertise {
    id: number;
    name: string;
}

interface AdvocateCardProps {
    name: string;
    experience: number;
    almamater: string;
    domicile: string;
    no_handphone: string;
    image: string;
    expertises: expertise[];
}

const AdvocateCard = (advocate: AdvocateCardProps) => {
    return (
        <div className="md:max-h-72 flex flex-col md:flex-row justify-center items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={`/images/advocates/${advocate.image}`}
                alt={advocate.name}
                className="w-full md:w-fit md:max-h-72 aspect-square md:aspect-[2/3] rounded-lg object-cover"
            />
            <div className="h-full w-full flex-1 flex flex-col justify-between items-start gap-2 md:gap-0 p-4">
                <h3 className="font-bold text-lg md:text-xl">
                    {advocate.name}
                </h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="h-4 md:h-6 w-4 md:w-6" />
                        <span className="font-medium text-sm md:text-base">
                            Pengalaman {advocate.experience} Tahun
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 md:h-6 w-4 md:w-6" />
                        <span className="font-medium text-sm md:text-base">
                            {advocate.almamater}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 md:h-6 w-4 md:w-6" />
                        <span className="font-medium text-sm md:text-base">
                            {advocate.domicile}
                        </span>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                    {advocate.expertises.map((expertise: expertise) => (
                        <Badge
                            key={expertise.id}
                            variant="default"
                            className="bg-subtle text-secondary rounded-sm"
                        >
                            {expertise.name}
                        </Badge>
                    ))}
                </div>
                <a
                    href={`https://wa.me/62${advocate.no_handphone}`}
                    target="_blank"
                >
                    <Button variant="default">Konsultasi</Button>
                </a>
            </div>
        </div>
    );
};

export default AdvocateCard;
