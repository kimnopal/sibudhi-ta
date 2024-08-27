import { Link } from "@inertiajs/react";
("use client");

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import React, { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import Logo from "../../../public/images/logo.png";
import { Button } from "./ui/button";
import {
    Building2,
    Gavel,
    Landmark,
    LucideProps,
    MessagesSquare,
} from "lucide-react";

interface NavbarMenuItem {
    title: string;
    href: string;
    logo?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
}

interface NavbarItem {
    title: string;
    items: NavbarMenuItem[];
}

const menuItems: (NavbarItem | NavbarMenuItem)[] = [
    {
        title: "Layanan Konsultasi",
        items: [
            {
                title: "Konsultasi Hukum",
                href: "/services/legal-consultation",
                logo: MessagesSquare,
            },
            {
                title: "Perkara Perdata/Bisnis",
                href: "/services/legal-consultation",
                logo: Building2,
            },
            {
                title: "Perkara Pidana",
                href: "/services/legal-consultation",
                logo: Landmark,
            },
            {
                title: "Perkara Tata Usaha Negara",
                href: "/services/legal-consultation",
                logo: Gavel,
            },
        ],
    },
    {
        title: "Tentang Kami",
        href: "/about",
    },
];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 ${
                scrolled ? "bg-background shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="container max-w-screen-lg py-4 m-auto flex items-center justify-between">
                <div>
                    <Link
                        href="/"
                        className="flex justify-start items-center gap-4"
                    >
                        <img src={Logo} alt="" className="h-12" />
                        <span className="font-bold text-2xl">SiBudhi</span>
                    </Link>
                </div>

                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((item, index) => {
                            if ((item as NavbarMenuItem).href !== undefined) {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            <Link
                                                href={
                                                    (item as NavbarMenuItem)
                                                        .href
                                                }
                                                className="w-full h-full flex justify-center items-center"
                                            >
                                                <Button variant="link">
                                                    {
                                                        (item as NavbarMenuItem)
                                                            .title
                                                    }
                                                </Button>
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            } else if (
                                (item as NavbarItem).items !== undefined
                            ) {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuTrigger>
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[300px] lg:grid-cols-1">
                                                {(item as NavbarItem).items.map(
                                                    (subItem, subIndex) => {
                                                        return (
                                                            <ListItem
                                                                key={subIndex}
                                                                href={
                                                                    subItem.href
                                                                }
                                                                title={
                                                                    subItem.title
                                                                }
                                                            >
                                                                {subItem.logo ? (
                                                                    <subItem.logo className="text-primary" />
                                                                ) : null}
                                                            </ListItem>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                );
                            }
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "flex items-center select-none space-x-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-blue-100",
                        className
                    )}
                    {...props}
                >
                    {children}
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
export default Navbar;
