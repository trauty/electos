"use server";

import { getSession } from "@/actions/session";
import { SignOutButton } from "@/components";



export default async function Dashboard() {

    const session = await getSession();

    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            {session &&
                <div>
                    {session.email} <br />
                    <SignOutButton />
                </div>
            }
        </div>
    );
}