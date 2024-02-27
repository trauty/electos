"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { LoadingIcon } from "@/components";
import { signin } from "@/actions/session";

export function SignInForm() {
    const [error, dispatch] = useFormState(signin, undefined);

    return (
        <form action={dispatch} className="flex flex-col items-center justify-center gap-1 w-1/4 min-w-96 bg-electos-black-900 
            px-8 py-4 text-white rounded-md shadow-2xl">
            <h1 className="font-bold text-xl my-1">Anmelden</h1>
            <label htmlFor="email" className="self-start font-semibold">E-Mail</label> <br />
            <input type="email" id="email" name="email"
                className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"
            /> <br />
            <label htmlFor="password" className="self-start font-semibold">Passwort</label> <br />
            <input type="password" name="password" id="password"
                className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
            focus:ring-0 focus:border-electos-green-600 w-full"/> <br />
            <span className="">Sie haben kein Konto?
                <Link href="/auth/signup" className="ml-1 gradient-underline font-semibold">
                    Registrieren
                </Link>
            </span>
            {error &&
                <span className="text-red-500">{error}</span>
            }
            <LoginButton />
        </form>
    );
}

function LoginButton() {
    const state = useFormStatus();
   
    return (
        <>
            {state.pending ?
                <LoadingIcon width={40} height={40} className="py-2" />
                :
                <input type="submit" value="Anmelden" className="cursor-pointer my-2 bg-electos-green-500 py-2 px-4 
                rounded-md hover:bg-electos-green-600 transition-all duration-200 ease-in-out font-medium" />
            }
        </>
    );
}