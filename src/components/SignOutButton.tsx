"use client";

import { signout } from "@/actions/session";

export async function SignOutButton() {
    return (
        <>
            <button type="button" className="border-2 border-electos-black-950" onClick={async() => await signout()}>Abmelden</button> <br />
        </>
    )
}