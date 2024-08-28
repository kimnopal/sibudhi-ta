import { format } from "date-fns/format";
import { Submission } from "../data";
import { Button } from "@/Components/ui/button";
import {
    Archive,
    ArchiveX,
    Forward,
    MoreVertical,
    Reply,
    ReplyAll,
    Trash2,
} from "lucide-react";
import { Separator } from "@/Components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";

interface SubmissionDisplayProps {
    submission: Submission | null;
}

const SubmissionDisplay = ({ submission }: SubmissionDisplayProps) => {
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center p-2">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <Archive className="h-4 w-4" />
                        <span className="sr-only">Archive</span>
                    </Button>
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <ArchiveX className="h-4 w-4" />
                        <span className="sr-only">Move to junk</span>
                    </Button>
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Move to trash</span>
                    </Button>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <Reply className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                    </Button>
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <ReplyAll className="h-4 w-4" />
                        <span className="sr-only">Reply all</span>
                    </Button>
                    <Button variant="ghost" size="icon" disabled={!submission}>
                        <Forward className="h-4 w-4" />
                        <span className="sr-only">Forward</span>
                    </Button>
                </div>
                <Separator orientation="vertical" className="mx-2 h-6" />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={!submission}
                        >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                        <DropdownMenuItem>Star thread</DropdownMenuItem>
                        <DropdownMenuItem>Add label</DropdownMenuItem>
                        <DropdownMenuItem>Mute thread</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Separator />
            {submission ? (
                <div className="flex flex-1 flex-col">
                    <div className="flex items-start p-4">
                        <div className="flex items-start gap-4 text-sm">
                            <Avatar>
                                <AvatarImage alt={submission.name} />
                                <AvatarFallback>
                                    {submission.name
                                        .split(" ")
                                        .map((chunk) => chunk[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <div className="font-semibold">
                                    {submission.name}
                                </div>
                                <div className="line-clamp-1 text-xs">
                                    {submission.subject}
                                </div>
                                <div className="line-clamp-1 text-xs">
                                    <span className="font-medium">
                                        Reply-To:
                                    </span>{" "}
                                    {submission.email}
                                </div>
                            </div>
                        </div>
                        {submission.date && (
                            <div className="ml-auto text-xs text-muted-foreground">
                                {format(new Date(submission.date), "PPpp")}
                            </div>
                        )}
                    </div>
                    <Separator />
                    <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                        {submission.text}
                    </div>
                    <Separator className="mt-auto" />
                    <div className="p-4">
                        <form>
                            <div className="grid gap-4">
                                <Textarea
                                    className="p-4"
                                    placeholder={`Reply ${submission.name}...`}
                                />
                                <div className="flex items-center">
                                    <Label
                                        htmlFor="mute"
                                        className="flex items-center gap-2 text-xs font-normal"
                                    >
                                        <Switch
                                            id="mute"
                                            aria-label="Mute thread"
                                        />{" "}
                                        Mute this thread
                                    </Label>
                                    <Button
                                        onClick={(e) => e.preventDefault()}
                                        size="sm"
                                        className="ml-auto"
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="p-8 text-center text-muted-foreground">
                    No message selected
                </div>
            )}
        </div>
    );
};

export default SubmissionDisplay;
