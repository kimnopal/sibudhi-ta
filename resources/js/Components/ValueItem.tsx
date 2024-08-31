import { LucideProps } from "lucide-react";
import React from "react";

interface ValueItemProps {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
}

const ValueItem = (props: ValueItemProps) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 text-center">
            <props.icon className="w-12 h-12 text-secondary md:w-14 md:h-14" />
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl lg:text-2xl">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default ValueItem;
