import DashboardHeader from "@/Components/DashboardHeader";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import SideBar from "@/Components/SideBar";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen w-full flex-col bg-muted/40 mt-16">
                {/* <SideBar /> */}
                <main className="">{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default DashboardLayout;
