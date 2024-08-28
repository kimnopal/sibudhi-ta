import DashboardHeader from "@/Components/DashboardHeader";
import SideBar from "@/Components/SideBar";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <SideBar />
            <main className="flex flex-1 items-start p-4 sm:gap-4 sm:py-4 sm:pl-14 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
