"use client";

import { signOut } from "@/auth";
import { Session } from "next-auth";

interface DashboardProps {
    session: Session
}

export function DashboardComponent({ session }: DashboardProps) {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            {session &&
                <div>
                    {session.user.email}
                    <button type="button" onClick={() => signOut()}>Abmelden</button>
                </div>
            }
        </div>
    );
}