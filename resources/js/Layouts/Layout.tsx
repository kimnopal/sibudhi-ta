import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main className="text-foreground mt-16">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
