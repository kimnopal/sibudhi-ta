import DashboardLayout from "@/Layouts/DashboardLayout";
import { submissions } from "./data";
import Submission from "./components/Submission";

const page = ({ reports }: any) => {
    return (
        <DashboardLayout>
            <Submission submissions={reports} />
        </DashboardLayout>
    );
};

export default page;
