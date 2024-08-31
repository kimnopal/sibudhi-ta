import { Link, usePage } from "@inertiajs/react";
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
    PanelRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
                href: "/consultation",
                logo: MessagesSquare,
            },
            {
                title: "Perkara Perdata/Bisnis",
                href: "/services#perkara-perdata",
                logo: Building2,
            },
            {
                title: "Perkara Pidana",
                href: "/services#perkara-pidana",
                logo: Landmark,
            },
            {
                title: "Perkara Tata Usaha Negara",
                href: "/services#perkara-tata-usaha",
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
    const [scrolled, setScrolled] = useState(false);
    const { auth }: any = usePage().props;

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

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            variant="outline"
                            className="sm:hidden"
                        >
                            <PanelRight className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="https://soedirmanrobotic.com"
                                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:text-base"
                            >
                                <img src={Logo} alt="" className="h-12" />
                                <span className="sr-only">SiBudhi</span>
                            </Link>
                            {menuItems.map((item, index) => {
                                if (
                                    (item as NavbarMenuItem).href !== undefined
                                ) {
                                    return (
                                        <Link
                                            href={(item as NavbarMenuItem).href}
                                            className="flex items-center gap-4 px-2.5 text-primary hover:text-foreground"
                                            key={index}
                                        >
                                            {(item as NavbarMenuItem).title}
                                        </Link>
                                    );
                                } else if (
                                    (item as NavbarItem).items !== undefined
                                ) {
                                    return (
                                        <div
                                            className="flex flex-col space-y-3 pt-6"
                                            key={index}
                                        >
                                            <Link
                                                href="/services"
                                                className="flex items-center gap-4 px-2.5 text-primary hover:text-foreground"
                                            >
                                                Layanan Konsultasi
                                            </Link>
                                            {(item as NavbarItem).items.map(
                                                (subItem, index) => {
                                                    return (
                                                        <Link
                                                            href={subItem.href}
                                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground font-light"
                                                            key={index}
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                }
                            })}
                            {auth.user ? (
                                "udah login"
                            ) : (
                                <>
                                    <Link
                                        href={"/register"}
                                        className="flex-1 flex justify-center items-center"
                                    >
                                        <Button
                                            variant="secondary"
                                            className="flex-1"
                                        >
                                            Daftar
                                        </Button>
                                    </Link>
                                    <Link
                                        href={"/login"}
                                        className="w-full h-full flex justify-center items-center"
                                    >
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                        >
                                            Masuk
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>

                <NavigationMenu className="hidden sm:block">
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
                                                <Button
                                                    variant="link"
                                                    className="text-base"
                                                >
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
                                            <ul className="gap-3 p-2">
                                                {(item as NavbarItem).items.map(
                                                    (subItem, subIndex) => {
                                                        return (
                                                            <ListItem
                                                                className="text-nowrap"
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
                        <NavigationMenuItem className="flex pl-4 w-fit gap-4">
                            {auth.user ? (
                                "udah login"
                            ) : (
                                <>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} !px-0`}
                                    >
                                        <Link
                                            href={"/register"}
                                            className="w-full h-full flex justify-center items-center"
                                        >
                                            <Button variant="secondary">
                                                Daftar
                                            </Button>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} !px-0`}
                                    >
                                        <Link
                                            href={"/login"}
                                            className="w-full h-full flex justify-center items-center"
                                        >
                                            <Button variant="outline">
                                                Masuk
                                            </Button>
                                        </Link>
                                    </NavigationMenuLink>
                                </>
                            )}
                        </NavigationMenuItem>
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
