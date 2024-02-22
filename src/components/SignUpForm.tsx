"use client";

import Link from "next/link";

export function SignUpForm() {
    return (
        <form action="" className="flex flex-col items-center justify-center gap-1 w-1/4 min-w-96 bg-electos-black-900 
            px-8 py-4 text-white rounded-md shadow-2xl">
            <h1 className="font-bold text-xl my-1">Registrieren</h1>
            <div className="flex flex-row gap-4">
                <div>
                    <label htmlFor="email" className="self-start font-semibold">E-Mail</label> <br />
                    <input type="email" id="email" name="email"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"
                    /> <br />
                    <label htmlFor="password" className="self-start font-semibold">Passwort</label> <br />
                    <input type="password" name="password" id="password"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="firstName" className="self-start font-semibold">Vorname</label> <br />
                    <input name="firstName" id="firstName"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="lastName" className="self-start font-semibold">Nachname</label> <br />
                    <input name="lastName" id="lastName"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="street" className="self-start font-semibold">Straße</label> <br />
                    <input name="street" id="street"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />
                </div>

                <div>
                    <label htmlFor="plz" className="self-start font-semibold">PLZ</label> <br />
                    <input name="plz" id="plz"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="city" className="self-start font-semibold">Ort</label> <br />
                    <input type="city" min={0} name="city" id="city"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="iban" className="self-start font-semibold">IBAN</label> <br />
                    <input name="iban" id="iban"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="iban" className="self-start font-semibold">BLZ</label> <br />
                    <input name="iban" id="iban"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />

                    <label htmlFor="iban" className="self-start font-semibold">Institut</label> <br />
                    <input name="iban" id="iban"
                        className="bg-electos-black-950 border-2 border-electos-black-900 rounded-md px-2 py-1 outline-electos-green-600 focus:outline-none
                focus:ring-0 focus:border-electos-green-600 w-full"/> <br />
                </div>
            </div>

            <span className="">Sie haben ein Konto?
                <Link href="/auth/signin" className="ml-1 gradient-underline">
                    Anmelden
                </Link>
            </span>
            <input type="submit" value="Bestätigen" className="cursor-pointer my-2 bg-electos-green-500 py-2 px-4 
            rounded-md hover:bg-electos-green-600 transition-all duration-200 ease-in-out" />
        </form>
    );
}