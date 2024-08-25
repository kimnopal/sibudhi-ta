import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-background gap-8">
            <Link href="/" className="text-center">
                <ApplicationLogo className="h-20 mx-auto" />

                <span className="font-bold text-2xl">SiBudhi</span>
            </Link>

            {children}
        </div>
    );
}
