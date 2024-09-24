import DashboardLayout from "@/Layouts/DashboardLayout";
import { submissions } from "./data";
import Submission from "./components/Submission";
import { Head } from "@inertiajs/react";

const page = ({ reports, services }: any) => {

    return (
        <DashboardLayout>
            <Head title="Laporan" />
            <Submission submissions={reports} services={services} />
        </DashboardLayout>
    );
};

export default page;
