import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import DashboardLayout from "@/Layouts/DashboardLayout";

const SubmissionDetail = ({ submission }: any) => {
    console.log(submission);

    return (
        // <DashboardLayout>
        //     <section className="container max-w-screen-lg flex flex-col-reverse md:flex-row justify-between items-center gap-10  md:gap-0 py-14">
        <div className="flex flex-col w-full gap-5">
            <Card className="bg-white min-h-screen">
                {submission ? (
                    <>
                        <CardHeader className="space-y-0">
                            <CardTitle className="text-primary text-xl">
                                Dari : {submission.name}
                            </CardTitle>
                            <CardDescription className="text-primary flex gap-1 flex-wrap">
                                <div className="flex flex-col gap-3">
                                    <span className="text-secondary">
                                        {submission.email}
                                    </span>
                                    <div className="flex gap-1 flex-row flex-wrap">
                                        <Badge className="bg-primary hover:bg-primary font-normal">
                                            {submission.service.name}
                                        </Badge>
                                        {submission?.service_type && (
                                            <Badge className="bg-secondary font-normal">
                                                {submission?.service_type?.name}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-primary">
                            {submission.description}
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button className="">Hubungi</Button>
                        </CardFooter>
                    </>
                ) : (
                    <p className="text-primary">Belum ada data</p>
                )}
            </Card>
        </div>
        //     </section>
        // </DashboardLayout>
    );
};

export default SubmissionDetail;
