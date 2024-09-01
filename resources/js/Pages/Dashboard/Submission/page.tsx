import DashboardLayout from "@/Layouts/DashboardLayout";
import { submissions } from "./data";
import Submission from "./components/Submission";

const page = ({ reports }: any) => {
    return (
        <DashboardLayout>
            <Submission submissions={submissions} />
        </DashboardLayout>
    );
};

export default page;
