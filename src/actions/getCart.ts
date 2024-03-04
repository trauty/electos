"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";

export async function getCart() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    
}