import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React, {FC} from "react";
import {List} from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";

interface ProfileProps {
    username: string,
    initials?: string
}

const ProfileMain: FC<ProfileProps> = ({ username, initials }) => {
    return (
        <div>
            <div className="flex pt-2 items-center space-x-4 py-4">
                <div className="rounded-full max-w-14 max-h-14 border-2 border-slate-950 items-center">
                    <Avatar>
                        <AvatarFallback>{initials?.toUpperCase() ?? username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-1">
                    <h1 className="text-md">Hello, {username}!</h1>
                </div>
                <div className="ml-auto">
                    <Button variant="outline">View Plans</Button>
                </div>
            </div>
            <ul className="space-y-4">
                <li>
                    <Button variant="link" className="p-0">Change Username</Button>
                </li>
                <li>
                    <Button variant="link" className="p-0">Change Email</Button>
                </li>
                <li>
                    <Button variant="link" className="p-0">Change Password</Button>
                </li>
                <li>
                    <Button variant="link" className="p-0">Privacy</Button>
                </li>
            </ul>
        </div>
    );
}

export default ProfileMain;
