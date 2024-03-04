"use client";

import { addToCart } from "@/actions";
import { IProduct } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
    product: IProduct;
};

export function ProductCard({ product }: ProductCardProps) {
    const [isShown, setIsShown] = useState(false);
    const [count, setCount] = useState(1);
    const [msg, setMsg] = useState<string | null>(null);

    return (
        <div className="w-48 bg-electos-black-200 transition-color duration-200 ease-in hover:bg-electos-black-600 shadow-md rounded-md relative">
            <div className={clsx("w-full h-full transition-all duration-200 ease-in rounded-md", isShown ? "blur-[3px]" : "")} >
                <div className="w-full h-full flex flex-col justify-center items-center p-2 relative">
                    <Image src={product.product_image} alt="product" width={152} height={152} className="rounded-md" />
                    <h2 className="font-semibold mr-auto">{product.product_name}</h2>
                    <p className="w-full text-xs break-all truncate truncate-overflow mr-auto h-4">{product.product_description}</p>
                    <p className="mr-auto">Preis: {product.product_price + "€"}</p>
                </div>
            </div>
            <div className={clsx("absolute w-full h-full top-0 left-0 flex items-center justify-center")}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <div className={clsx(isShown ? "visible opacity-100" : "invisible opacity-0", "text-electos-white flex items-center justify-center flex-col gap-2 transition-all duration-200 ease-in")}>
                    <div>
                        <Image src="/cart_icon.svg" alt="cart" width={48} height={48}/>
                    </div>
                    <input type="number" min={1} defaultValue={1} onChange={(e) => setCount(parseInt(e.target.value))} className="w-12 text-center text-black rounded-md ring-1 ring-electos-black-950 focus:ring-electos-green-500 focus:ring-2 focus:outline-none"/>
                    <button className="gradient-underline" onClick={async() => {
                            if (await addToCart(parseInt(product.product_id), count)) {
                                setMsg(`${count} Stück hinzugefügt`);
                            }
                            else {
                                setMsg("Fehler beim Hinzufügen");
                            }
                        }}>Hinzufügen
                    </button>
                    {msg &&
                        <div className="text-electos-green-500 text-xs">
                            {msg}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}