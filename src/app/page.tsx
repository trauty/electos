"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main className={clsx("min-h-screen w-screen flex items-center justify-center transition-opacity duration-300 ease-linear", 
      show ? "opacity-100" : "opacity-0")}>
      <div>
        <h1 className="font-bold text-2xl sm:text-4xl">Willkommen bei <Image src="/electos_logo.svg" alt="Logo" width={170} height={54} className="inline -translate-y-[0.5rem] translate-x-0.5" /></h1>
        <h2 className="font-semibold text-center">Ihr Spezialist für elektrische Bauteile</h2>
      </div>
      <div className="absolute bottom-0 mb-4">
        <Link href="/imprint" 
          className="bg-electos-green-500 hover:bg-electos-green-600 text-electos-white p-2 
          rounded-md transition-colors duration-300 ease-in-out">
          Impressum & Datenschutz
        </Link>
      </div>
    </main>
  );
}
