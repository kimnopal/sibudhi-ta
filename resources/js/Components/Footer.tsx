import { Link } from "@inertiajs/react";
import { Separator } from "./ui/separator";

const navMenu = [
    {
        title: "About Us",
        contents: [
            {
                title: "About Us",
                href: "/about",
            },
            {
                title: "Our Team",
                href: "/team",
            },
            {
                title: "Our Achievements",
                href: "/achievements",
            },
        ],
    },
    {
        title: "Our Projects",
        contents: [
            {
                title: "Our Projects",
                href: "/projects",
            },
            {
                title: "Our Products",
                href: "/products",
            },
        ],
    },
    {
        title: "Our Services",
        contents: [
            {
                title: "Our Services",
                href: "/services",
            },
            {
                title: "Our Events",
                href: "/events",
            },
        ],
    },
];

const footSocials = [
    {
        href: "https://facebook.com",
        logo: <img src="./images/icons/facebook.svg" alt="Facebook" />,
    },
    {
        href: "https://twitter.com",
        logo: <img src="./images/icons/twitter.svg" alt="Twitter" />,
    },
    {
        href: "https://instagram.com",
        logo: <img src="./images/icons/instagram.svg" alt="Instagram" />,
    },
    {
        href: "https://linkedin.com",
        logo: <img src="./images/icons/linkedin.svg" alt="Linkedin" />,
    },
];

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground w-full px-4 pt-8">
            <div className="container max-w-screen-lg mx-auto flex flex-col py-8 gap-4">
                <div className="flex justify-between gap-x-24 gap-y-8 flex-wrap">
                    <div className="w-full max-w-xs flex flex-col gap-6 items-center md:items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="./images/logo.png"
                                alt="SiBudhi"
                                className="h-12"
                            />
                            <span>SiBudhi</span>
                        </Link>
                        <p className=" text-center md:text-justify">
                            We are group of students with ambitions to be the
                            winner of Kontes Robot Indonesia (KRI) and Kontes
                            Robot Terbang Indonesia (KRTI). We will always
                            strike through for “The Future We Make, For The
                            Better Life”.
                        </p>
                        <Link
                            href={`mailto:kljklj@gmail.com`}
                            className="font-bold"
                        >
                            jljkjklj
                        </Link>
                    </div>
                    <div className="flex flex-1 flex-col gap-6">
                        <ul className="flex flex-1 flex-wrap justify-between items-start">
                            {navMenu.map((menu, index) =>
                                menu.contents ? (
                                    <li
                                        className="grow shrink basis-1/2 md:basis-0 self-stretch px-2 flex-col justify-start items-start gap-2 inline-flex"
                                        key={index}
                                    >
                                        <h3 className="text-lg font-bold">
                                            {menu.title}
                                        </h3>
                                        <Separator />
                                        <ul className="flex flex-col gap-2">
                                            {menu.contents.map(
                                                (content, id) => (
                                                    <li
                                                        key={id}
                                                        className="overflow-hidden"
                                                    >
                                                        <Link
                                                            href={content.href}
                                                            className="group relative overflow-hidden"
                                                        >
                                                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-100%]">
                                                                {content.title}
                                                            </p>
                                                            <p className="transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[100%] group-hover:translate-y-[0%] absolute">
                                                                {content.title}
                                                            </p>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </div>
                </div>
                <Separator />
                <div className="flex justify-center md:justify-between flex-wrap-reverse gap-y-4 items-center">
                    <p>© 2024 Soedirman Robotic Team</p>
                    <ul className="flex gap-6 items-center">
                        {footSocials.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.logo}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
