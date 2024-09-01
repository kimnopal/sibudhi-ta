import { format } from "date-fns/format";
import { Submission } from "../data";
import { Button } from "@/Components/ui/button";
import { MoreVertical } from "lucide-react";
import { Separator } from "@/Components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Link } from "@inertiajs/react";

interface SubmissionDisplayProps {
    submission: Submission | null;
}

const SubmissionDisplay = ({ submission }: SubmissionDisplayProps) => {
    return (
        <div className="flex h-full flex-col">
            <div className="hidden md:flex items-center justify-end p-2">
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
            <Separator className="hidden md:block" />
            {submission ? (
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-col md:flex-row items-start p-4">
                        <div className="flex flex-col md:flex-row items-start gap-4 text-sm">
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
                                    {submission.email}
                                </div>
                                <div className="line-clamp-1 text-xs">
                                    {submission.service.name}
                                </div>
                            </div>
                        </div>
                        {submission.date && (
                            <div className="md:ml-auto text-xs text-muted-foreground">
                                {format(new Date(submission.date), "PPpp")}
                            </div>
                        )}
                    </div>
                    <Separator />
                    <div className="whitespace-pre-wrap p-4 text-sm">
                        {submission.description}
                    </div>
                    <Link
                        href={`https://wa.me/${submission.phone}`}
                        className="p-4"
                    >
                        <Button className="w-full">Contact via WhatsApp</Button>
                    </Link>
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
