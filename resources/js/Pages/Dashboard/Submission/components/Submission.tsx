import { Input } from "@/Components/ui/input";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/Components/ui/resizable";
import { Separator } from "@/Components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { TooltipProvider } from "@/Components/ui/tooltip";
import { Search } from "lucide-react";
import { useState } from "react";
import SubmissionList from "./SubmissionList";
import { type Submission } from "../data";
import SubmissionDisplay from "./SubmissionDisplay";
import { useSubmission } from "../use-submission";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import SubmissionDetail from "../show";

interface SubmissionProps {
    submissions: Submission[];
}

const Submission = ({ submissions }: any) => {
    const [search, setSearch] = useState<string>("");
    const [submissionId, setSubmissionId] = useState(0);
    console.log(submissions);

    return (
        <section className="container max-w-screen-lg flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0 py-14">
            <div className="flex flex-col w-full gap-5">
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Laporan Masuk
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="grid-cols-1 col-span-3 flex flex-col gap-2 overflow-y-scroll max-h-screen">
                        {submissions &&
                            submissions.map((submission: any) => (
                                <div
                                    onClick={() =>
                                        setSubmissionId(submission.id)
                                    }
                                    key={submission.id}
                                >
                                    <Card
                                        className={`bg-white ${
                                            submissionId == submission.id
                                                ? "border border-primary"
                                                : ""
                                        }`}
                                    >
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-primary text-xl">
                                                {submission.name}
                                            </CardTitle>
                                            <CardDescription className="text-primary flex gap-1 flex-wrap">
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-secondary">
                                                        {submission.email}
                                                    </span>
                                                    <div className="flex gap-1 flex-row flex-wrap">
                                                        <Badge className="bg-primary hover:bg-primary font-normal">
                                                            {
                                                                submission
                                                                    .service
                                                                    .name
                                                            }
                                                        </Badge>
                                                        {submission?.service_type && (
                                                            <Badge className="bg-secondary font-normal">
                                                                {
                                                                    submission
                                                                        ?.service_type
                                                                        ?.name
                                                                }
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            ))}
                    </div>
                    {/* <div className="col-span-1"></div> */}
                    <div className="col-span-9">
                        <SubmissionDetail
                            submission={submissions[submissionId - 1]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Submission;
