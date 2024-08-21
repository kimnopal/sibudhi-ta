import Navbar from "@/Components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="border border-primary m-auto max-w-[865px] min-h-screen">
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
