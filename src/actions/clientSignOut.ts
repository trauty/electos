"use server";

import { signOut } from "@/auth";

export async function clientSignOut() {
    await signOut();
}