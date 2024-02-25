import { auth } from "@/auth";
import { DashboardComponent } from "@/components";

export default async function Dashboard() {

    const session = await auth();

    //console.log(session);

    return (
        <DashboardComponent session={session!}/>
    );
}