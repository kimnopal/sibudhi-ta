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

interface SubmissionProps {
    submissions: Submission[];
}

const Submission = ({ submissions }: SubmissionProps) => {
    const [submission] = useSubmission();
    const [search, setSearch] = useState<string>("");

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
                        sizes
                    )}`;
                }}
                className="h-full max-h-[800px] items-stretch"
            >
                <ResizablePanel defaultSize={30} minSize={30}>
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-4 py-2">
                            <h1 className="text-xl font-bold">Inbox</h1>
                            <TabsList className="ml-auto">
                                <TabsTrigger
                                    value="all"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    All Submission
                                </TabsTrigger>
                                <TabsTrigger
                                    value="unread"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    Unread
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search"
                                        className="pl-8"
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <TabsContent value="all" className="m-0">
                            <SubmissionList
                                items={submissions.filter(
                                    (item) =>
                                        item.name.includes(search) ||
                                        item.email.includes(search) ||
                                        item.text.includes(search)
                                )}
                            />
                        </TabsContent>
                        <TabsContent value="unread" className="m-0">
                            <SubmissionList
                                items={submissions.filter((item) => !item.read)}
                            />
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={70} minSize={30}>
                    <SubmissionDisplay
                        submission={
                            submissions.find(
                                (item) => item.id === submission.selected
                            ) || null
                        }
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
};

export default Submission;
