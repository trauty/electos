"use client";

import { updateCart } from "@/actions";
import { ICartItem } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartItemProps {
    item: ICartItem;
    deleteItem: (productId: string) => void;
    updateSum: () => void;
};

export function CartItem({ item, deleteItem, updateSum }: CartItemProps) {
    const [crtAmount, setAmount] = useState(parseInt(item.amount));

    useEffect(() => {
        async function updateItem() {
            if (parseInt(item.amount) != crtAmount) {
                item.amount = String(crtAmount);
                await updateCart(parseInt(item.product_id), crtAmount);
                updateSum();
            }
        }

        updateItem();
    }, [crtAmount, item.amount, item.product_id, updateSum, item]);

    return (
        <div className="w-full h-full bg-electos-white text-electos-black-950 rounded-md flex flex-row gap-4 items-center">
            <Image src={item.image} alt="product" width={64} height={64} className="rounded-md p-0.5" />
            <div>
                {item.name}
            </div>
            <div className="w-64 hidden md:block">
                {item.description}
            </div>
            <div>
                <span className="hidden sm:contents">Preis:</span> {item.price + "€"}
            </div>
            <div className="hidden sm:block">
                Summe: {(crtAmount * parseFloat(item.price)).toFixed(2)}€
            </div>
            <div className="ml-auto mr-2 flex flex-row gap-4 w-max justify-center items-center">
                <button className="text-electos-green-500 -translate-y-1 text-2xl" onClick={() => setAmount(crtAmount + 1)}>+</button>
                <input className="bg-electos-black-800 w-8 rounded-md text-electos-white text-center" value={crtAmount}
                    onChange={(e) => setAmount(parseInt(e.target.value))} min={1}></input>
                <button className="text-red-500 -translate-y-1 text-2xl" onClick={() => setAmount(crtAmount >= 2 ? crtAmount - 1 : crtAmount)}>-</button>
                <button className="hover:fill-red-500 hover:stroke-electos-black-700 fill-electos-white stroke-red-500"
                    onClick={() => deleteItem(item.product_id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}