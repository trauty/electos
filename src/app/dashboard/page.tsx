"use server";
import { auth, signOut } from "@/auth";
import { DashboardComponent } from "@/components"


export default async function Dashboard() {

    const session = await auth();

    return (
        <DashboardComponent session={session!} />
    );
}