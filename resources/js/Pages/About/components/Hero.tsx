import React from "react";

const Hero = () => {
    return (
        <section className="container max-w-screen-lg flex flex-col justify-between items-center gap-7 md:gap-12 pt-8 pb-5 md:flex-row">
            <div className="flex-1 flex flex-col gap-3 md:gap-4 order-2 md:order-1">
                <h2 className="font-bold text-2xl md:text-3xl">
                    Satu platform untuk berbagai layanan hukum
                </h2>
                <p className="font-medium text-justify">
                    Sibudhi merupakan platform legal yang menghubungkan
                    profesional hukum dengan masyarakat pencari kedilan.
                </p>
            </div>
            <div className="flex-1 flex justify-end order-1 md:order-1">
                <img
                    src="./images/about.png"
                    alt="About Us"
                    className=""
                    width={400}
                />
            </div>
        </section>
    );
};

export default Hero;
