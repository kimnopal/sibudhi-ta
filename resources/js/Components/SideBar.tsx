"use client";
import { Link, usePage } from "@inertiajs/react";
import { FolderCheck, Home } from "lucide-react";
import ApplicationLogo from "./ApplicationLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SideBar = () => {
    const { auth }: any = usePage().props;

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-secondary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <ApplicationLogo className="h-full transition-all group-hover:scale-110" />
                    <span className="sr-only">SiBudhi</span>
                </Link>
                <Link
                    href="/Dashboard"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                </Link>
                <Link
                    href="/Dashboard/Submission"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <FolderCheck className="h-5 w-5" />
                    <span className="sr-only">Submission</span>
                </Link>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    href="/Dashboard/Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Avatar className="border border-border">
                        <AvatarImage src="" />
                        <AvatarFallback>
                            {auth.user.name.split(" ")[0][0]}
                        </AvatarFallback>
                    </Avatar>{" "}
                    <span className="sr-only">Profile</span>
                </Link>
            </nav>
        </aside>
    );
};

export default SideBar;
