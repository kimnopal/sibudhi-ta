import { ScrollArea } from "@/Components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { Submission } from "../data";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Badge } from "@/Components/ui/badge";
import { useSubmission } from "../use-submission";
import { SheetTrigger } from "@/Components/ui/sheet";

interface SubmissionListProps {
    items: Submission[];
}

export const SubmissionList = ({ items }: SubmissionListProps) => {
    const [submission, setSubmission] = useSubmission();

    return (
        <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 md:p-4 pt-0">
                {items.map((item) => (
                    // <SheetTrigger asChild>
                    <button
                        key={item.id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            submission.selected === item.id && "border-primary"
                        )}
                        onClick={() =>
                            setSubmission({
                                ...submission,
                                selected: item.id,
                            })
                        }
                    >
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold text-base">
                                        {item.name}
                                    </div>
                                    {/* {!item.read && (
                                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                    )} */}
                                </div>
                                <div
                                    className={cn(
                                        "ml-auto text-xs",
                                        submission.selected === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {formatDistanceToNow(
                                        new Date(item.created_at),
                                        {
                                            addSuffix: true,
                                        }
                                    )}
                                </div>
                            </div>
                            <div className="text-xs font-semibold">
                                {item.service.name}
                            </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                            {item.description.substring(0, 300)}
                        </div>
                        <div className="flex items-center gap-2">
                            {item.service_type ? (
                                <Badge
                                    key={item.service_type.id}
                                    variant={"secondary"}
                                    className="text-xs font-light"
                                >
                                    {item.service_type.name}
                                </Badge>
                            ) : null}
                        </div>
                        {/* {item.service_type.length ? (
                                {item.labels.map((label) => (
                                    <Badge
                                        key={label}
                                        variant={getBadgeVariantFromLabel(
                                            label
                                        )}
                                    >
                                        {label}
                                    </Badge>
                                ))}
                        ) : null} */}
                    </button>
                    // </SheetTrigger>
                ))}
            </div>
        </ScrollArea>
    );
};

export const SubmissionListMobile = ({ items }: SubmissionListProps) => {
    const [submission, setSubmission] = useSubmission();

    return (
        <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 md:p-4 pt-0">
                {items.map((item) => (
                    <SheetTrigger asChild>
                        <button
                            key={item.id}
                            className={cn(
                                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                                submission.selected === item.id &&
                                    "border-primary"
                            )}
                            onClick={() =>
                                setSubmission({
                                    ...submission,
                                    selected: item.id,
                                })
                            }
                        >
                            <div className="flex w-full flex-col gap-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold text-base">
                                            {item.name}
                                        </div>
                                        {/* {!item.read && (
                                            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                        )} */}
                                    </div>
                                    <div
                                        className={cn(
                                            "ml-auto text-xs",
                                            submission.selected === item.id
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {formatDistanceToNow(
                                            new Date(item.created_at),
                                            {
                                                addSuffix: true,
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="text-xs font-semibold">
                                    {item.service.name}
                                </div>
                            </div>
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                                {item.description.substring(0, 300)}
                            </div>
                            <div className="flex items-center gap-2">
                                {item.service_type ? (
                                    <Badge
                                        key={item.service_type.id}
                                        variant={"secondary"}
                                        className="text-xs font-light"
                                    >
                                        {item.service_type.name}
                                    </Badge>
                                ) : null}
                            </div>
                            {/* {item.service_type.length ? (
                                {item.labels.map((label) => (
                                    <Badge
                                        key={label}
                                        variant={getBadgeVariantFromLabel(
                                            label
                                        )}
                                    >
                                        {label}
                                    </Badge>
                                ))}
                        ) : null} */}
                        </button>
                    </SheetTrigger>
                ))}
            </div>
        </ScrollArea>
    );
};

function getBadgeVariantFromLabel(
    label: string
): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
        return "default";
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline";
    }

    return "secondary";
}

// export default SubmissionList;
