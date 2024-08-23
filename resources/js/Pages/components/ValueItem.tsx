import React from "react";

interface ValueItemProps {
    title: string;
    description: string;
    image: string;
}

const ValueItem = ({ title, description, image }: ValueItemProps) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 text-center">
            <img src={image} alt={title} />
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ValueItem;
