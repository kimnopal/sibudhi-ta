import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { FolderCheck, Home, PanelLeft } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const DashboardHeader = () => {
    const { auth }: any = usePage().props;

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
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
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default DashboardHeader;
