"use client";

import Link from "next/link";
import { Logo, UserButton } from ".";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { signout } from "@/actions/session";

interface NavBarProps {
    isLoggedIn: boolean;
};

export function NavBarComponent({ isLoggedIn }: NavBarProps) {

    const [menuOpen, setMenu] = useState(false);

    return (
        <div className="fixed w-[100%] bg-electos-black-950">
            <div className="flex w-[85%] justify-between m-auto py-3">
                <div>
                    <Link href="/">
                        <Logo width={170} height={36} />
                    </Link>
                </div>
                <div>
                    <nav className="h-full">
                        <div className="hidden xl:contents">
                            <ul className="h-full flex gap-6 justify-center items-center text-electos-white">
                                <li>
                                    <Link href="/products/1" className="gradient-underline font-semibold">Passive Komp.</Link>
                                </li>
                                <li>
                                    <Link href="/products/2" className="gradient-underline font-semibold">Aktive Komp.</Link>
                                </li>
                                <li>
                                    <Link href="/products/3" className="gradient-underline font-semibold">Mikroprozessoren</Link>
                                </li>
                                <div>
                                    {isLoggedIn ?
                                        <div className="ml-8 flex gap-4">
                                            <UserButton />
                                        </div>
                                        :
                                        <div className="ml-8 flex gap-4">
                                            <Link href="/auth/signin"
                                                className="text-center font-semibold px-4 py-1 border-2 rounded-md 
                                            focus:ring-1 ring-electos-green-400 transition-all duration-200 ease-in-out
                                            hover:bg-electos-green-500">
                                                <span>Anmelden</span>
                                            </Link>
                                            <Link href="/auth/signup"
                                                className="text-center font-semibold px-4 py-1 rounded-md 
                                            focus:ring-1 ring-electos-green-400 hover:bg-gradient-to-br bg-gradient-to-tr from-electos-green-400 
                                            via-electos-green-600 to-electos-green-400 flex items-center justify-center">
                                                <span>Registrieren</span>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </ul>
                        </div>
                        <div className="xl:hidden h-full flex items-center justify-center">
                            <button
                                className="flex flex-col justify-center items-center"
                                onClick={() => setMenu(!menuOpen)}>
                                <span className={clsx("bg-electos-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm",
                                    menuOpen ? "rotate-45 translate-y-1" : "-translate-y-1.5")} >
                                </span>
                                <span className={clsx("bg-electos-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm",
                                    menuOpen ? "opacity-0" : "opacity-100")}>
                                </span>
                                <span className={clsx("bg-electos-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm",
                                    menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1.5")} >
                                </span>
                            </button>
                        </div>
                        <div>
                            <ul className={clsx("xl:hidden transition-all duration-300 ease-in-out absolute right-0 p-4 mt-[0.75rem]",
                                "bg-electos-black-950 h-screen text-white border-t-2 border-electos-green-600",
                                menuOpen ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-16")}
                                style={{ visibility: menuOpen ? "visible" : "hidden" }}>
                                <li>
                                    <h1 className="font-bold text-xl">Menu</h1>
                                </li>
                                <li>
                                    <Link href="/products/1" className="gradient-underline font-semibold">Passive Komp.</Link>
                                </li>
                                <li>
                                    <Link href="/products/2" className="gradient-underline font-semibold">Aktive Komp.</Link>
                                </li>
                                <li>
                                    <Link href="/products/3" className="gradient-underline font-semibold">Mikroprozessoren</Link>
                                </li>
                                {isLoggedIn ?
                                    <li className="h-fit w-fit flex flex-col mt-4 gap-2">
                                        <Link href="/dashboard" className="gradient-underline font-semibold w-fit">Dashboard</Link>
                                        <Link href="/shopping-cart" className="gradient-underline font-semibold w-fit">Warenkorb</Link>
                                        <button className="text-center font-semibold px-4 py-1 border-2 rounded-md 
                                            focus:ring-1 ring-electos-green-400 transition-all duration-200 ease-in-out
                                            hover:bg-electos-green-500 mt-2"
                                            onClick={async() => await signout()}
                                        >
                                            Abmelden
                                        </button>
                                    </li>
                                    :
                                    <li className="h-fit flex flex-col mt-4 gap-2">
                                        <Link href="/auth/signin"
                                            className="text-center font-semibold px-4 py-1 border-2 rounded-md 
                                        focus:ring-1 ring-electos-green-400 transition-all duration-200 ease-in-out
                                        hover:bg-electos-green-500">
                                            <span>Anmelden</span>
                                        </Link>
                                        <Link href="/auth/signup"
                                            className="text-center font-semibold px-4 py-1 rounded-md 
                                        focus:ring-1 ring-electos-green-400 hover:bg-gradient-to-br bg-gradient-to-tr from-electos-green-400 
                                        via-electos-green-600 to-electos-green-400 ">
                                            <span>Registrieren</span>
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}