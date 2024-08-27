import { Link } from "@inertiajs/react";
import { Separator } from "./ui/separator";

const navMenu = [
    {
        title: "Layanan",
        contents: [
            {
                title: "Konsultasi Hukum",
                href: "/konsultasi",
            },
            {
                title: "Perkara Perdata/Bisnis",
                href: "/layanan",
            },
            {
                title: "Perkara Pidana",
                href: "/layanan",
            },
            {
                title: "Perkara Tata Usaha Negara",
                href: "/layanan",
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
                <div className="flex justify-between gap-x-10 gap-y-8 flex-wrap flex-col md:flex-row">
                    <div className="w-full md:max-w-sm flex flex-col gap-6 items-center lg:items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="./images/logo.png"
                                alt="SiBudhi"
                                className="h-12"
                            />
                            <span className="font-bold text-3xl">SiBudhi</span>
                        </Link>
                        <p className="text-center lg:text-justify text-lg">
                            Sibudhi merupakan platform legal yang menghubungkan
                            profesional hukum dengan masyarakat pencari kedilan.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-6">
                        <ul className="flex flex-1 justify-between items-start gap-6 flex-col lg:flex-row">
                            {navMenu.map((menu, index) =>
                                menu.contents ? (
                                    <li
                                        className="grow shrink basis-1/2 md:basis-0 flex-col justify-start items-start gap-2 inline-flex"
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
                            <li className="grow shrink basis-1/2 md:basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                <h3 className="text-lg font-bold">
                                    Alamat Kami
                                </h3>
                                <p className="text-justify mb-1">
                                    Desa Karangnangka RT.003 RW.004 Komplek
                                    Kolam Renang dan Outbound Joglo Jembaran,
                                    Kecamatan Kedungbanteng, Kabupaten Banyumas,
                                    Jawa Tengah, 53152
                                </p>
                                <p>No. Telp : 082135027883</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator />
                <div className="flex justify-center md:justify-between flex-wrap-reverse gap-y-4 items-center">
                    <p>© 2024 Sibudhi</p>
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
