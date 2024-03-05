"use client";

import { deleteCartItem, getCart } from "@/actions";
import { CartItem, LoadingIcon } from "@/components";
import { ICartItem } from "@/types";
import clsx from "clsx";
import { useEffect, useState } from "react";


export default function Cart() {
    const [carts, setCarts] = useState<ICartItem[]>();

    useEffect(() => {
        async function fetchCarts() {
            setCarts(await getCart());
        }

        if (carts == undefined) {
            fetchCarts();
        }
    });

    async function deleteItem(productId: string) {
        await deleteCartItem(parseInt(productId));
        setCarts(carts?.filter(cart => cart.product_id !== productId));
    }

    return (
        <div>
            <div className="w-screen min-h-screen pt-20 md:px-10 md:pb-10 p-2">
                <h1 className="font-bold text-4xl mb-4">Warenkorb</h1>
                <div className={clsx("bg-electos-black-700 h-fit text-electos-white rounded-xl p-2 w-full flex flex-col gap-4 transition-all duration-300 ease-in-out", carts ? "opacity-100" : "opacity-0")}>
                    {carts?.map((item, key) => {
                        return (
                            <div key={key}>
                                <CartItem item={item} deleteItem={deleteItem} />
                            </div>
                        );
                    })}
                </div>
            </div>
            {!carts &&
                <div className="absolute w-screen h-screen left-0 top-0 flex items-center justify-center">
                    <LoadingIcon width={160} height={160} className="stroke-electos-black-800" />
                </div>
            }
        </div>
    );
}