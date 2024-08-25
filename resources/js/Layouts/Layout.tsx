import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {/* <div className="container w-full mt-14"> */}
            <main className="text-foreground">{children}</main>
            {/* </div> */}
            <Footer />
        </>
    );
};

export default Layout;
