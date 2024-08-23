import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface ServiceItemProps {
    title: string;
    description: string;
    image: string;
}

const ServiceItem = ({ title, description, image }: ServiceItemProps) => {
    return (
        <Card className="h-full w-full flex flex-col">
            <CardHeader>
                <img src={image} alt={title} className="w-16 h-16" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-5">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p>{description}</p>
            </CardContent>
        </Card>
    );
};

export default ServiceItem;
