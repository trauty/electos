"use client";

import { clientSignOut } from "@/actions";
import { Session } from "next-auth";

interface DashboardProps {
    session: Session;
};

async function testApi() {
    try {
        const res = await fetch("/api/protected");
        console.log(res.url);
    } catch (err) {
        throw err;
    }
}

export function DashboardComponent({ session }: DashboardProps) {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            {session &&
                <div>
                    {session.user.email} <br />
                    <button type="button" className="border-2 border-electos-black-950" onClick={() => clientSignOut()}>Abmelden</button> <br />
                    <button className="border-2 border-electos-black-950" onClick={async() => await testApi()}>YEETUS</button>
                </div>
            }
        </div>
    );
}