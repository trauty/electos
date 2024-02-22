"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from ".";


export function NavBar () {
    return (
        <div className="fixed w-[100%] bg-electos-black-950">
            <div className="flex w-[80%] justify-between m-auto py-5">
                <div>
                    <Link href="/">
                        <Logo width={170} height={36}/>
                    </Link>
                </div>
                <div className="">
                    <nav className="h-full">
                        <ul className="h-full flex gap-6 justify-center items-center text-electos-white">
                            <li>
                                <Link href="" className="gradient-underline font-semibold">Passive Komp.</Link>
                            </li>
                            <li>
                                <Link href="" className="gradient-underline font-semibold">Aktive Komp.</Link>
                            </li>
                            <li>
                                <Link href="" className="gradient-underline font-semibold">Mikroprozessoren</Link>
                            </li>
                            <div className="ml-8 flex gap-4">
                                <li>
                                    <Link href="/auth/signin" className="gradient-underline font-semibold">Anmelden</Link>
                                </li>
                                <li>
                                    <Link href="/auth/signup" className="gradient-underline font-semibold">Registrieren</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}