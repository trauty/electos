"use server";

import { getSession } from "@/actions/session";
import { NavBarComponent } from "./NavBarComponent";

export async function NavBar() {
    const session = await getSession();
    
    return (
        <>
            <NavBarComponent isLoggedIn={session.isLoggedIn}/>
        </>
    )
}