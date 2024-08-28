import React from "react";

const Hero = () => {
    return (
        <section className="container max-w-screen-lg flex justify-between items-center gap-12 py-12">
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="font-bold text-3xl">
                    Satu platform untuk berbagai layanan hukum
                </h2>
                <p className="font-medium text-justify">
                    Sibudhi merupakan platform legal yang menghubungkan
                    profesional hukum dengan masyarakat pencari kedilan.
                </p>
            </div>
            <div className="flex-1">
                <img src="./images/about.png" alt="About Us" className="" />
            </div>
        </section>
    );
};

export default Hero;
