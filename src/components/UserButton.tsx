"use client";

import { signout } from "@/actions/session";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export function UserButton() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!isOpen)} className="hover:fill-electos-green-500 hover:bg-electos-green-500 fill-none w-[38px] h-[38px] rounded-full transition-colors duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className={clsx("flex items-center justify-center transition-all duration-300 ease-in-out -mt-1", isOpen ? "opacity-100 rotate-180" : "opacity-0")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </button>

            <div
                className={clsx("absolute z-10 w-28 rounded-md bg-electos-black-700 shadow-lg ring-1 ring-electos-black-950 ring-opacity-5 focus:outline-none -translate-x-[2.25rem]",
                    "mt-12 overflow-hidden transition-all ease-in-out duration-300", isOpen ? 'opacity-100 translate-y-1.5' : 'opacity-0 invisible -translate-y-1.5')}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
            >
                <div>
                    <Link href="/dashboard" className="w-full block text-center px-4 py-2 text-sm hover:bg-electos-black-900" role="menuitem" tabIndex={-1} id="menu-item-0">Konto</Link>
                    <button className="w-full block px-4 py-2 text-sm hover:bg-electos-black-900" role="menuitem" tabIndex={-1} id="menu-item-2"
                        onClick={async () => {
                            await signout();
                        }}>
                        Abmelden
                    </button>
                </div>
            </div>
        </>
    );
}