"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export function CategoryButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="text-center flex items-center justify-center gap-1 border-[1px] rounded-md p-1 border-electos-black-950 shadow-md w-32 hover:"
                onClick={() => setOpen(!open)}
            >
                Kategorien
                <div className={clsx("inline-block transition-all duration-200 ease-in-out", 
                    open ? "rotate-180" : ""
                )}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </button>
            <div
                className={clsx("absolute z-10 w-32 rounded-md border-electos-black-950 border-[1px] shadow-lg ring-1 bg-electos-white ring-electos-black-400 ring-opacity-5 focus:outline-none text-sm",
                    "overflow-hidden transition-all ease-in-out duration-100", open ? 'opacity-200 translate-y-1.5' : 'opacity-0 invisible -translate-y-1.5')}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
            >
                <div>
                <Link href="/products/all" className="w-full block text-center p-1 hover:bg-electos-black-300" role="menuitem" tabIndex={-1} id="menu-item-0">Alle Produkte</Link>
                    <hr />
                    <Link href="/products/1" className="w-full block text-center p-1 hover:bg-electos-black-300" role="menuitem" tabIndex={-1} id="menu-item-0">Passive Komp.</Link>
                    <hr />
                    <Link href="/products/2" className="w-full block text-center p-1 hover:bg-electos-black-300" role="menuitem" tabIndex={-1} id="menu-item-0">Aktive Komp.</Link>
                    <hr />
                    <Link href="/products/3" className="w-full block text-center p-1 hover:bg-electos-black-300" role="menuitem" tabIndex={-1} id="menu-item-0">Mikroprozessoren</Link>
                </div>
            </div>
        </div>
    );
}