"use client";

import { commitCart, deleteCartItem, getCart, getCartSum } from "@/actions";
import { CartItem, LoadingIcon } from "@/components";
import { ICartItem } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Cart() {
    const [carts, setCarts] = useState<ICartItem[] | null>();
    const [sum, setSum] = useState(0);
    const [showNoItems, setShowNoItems] = useState(false);
    useEffect(() => {
        async function fetchCarts() {
            const carts = await getCart();
            if (carts?.length! <= 0) {
                setCarts(null);
                setShowNoItems(true);
            } else {
                setCarts(carts);
            }
        }

        if (carts == undefined) {
            fetchCarts();
            updateSum();
        }
    });

    async function updateSum() {
        const newSum = await getCartSum();
        setSum(parseFloat(newSum!.total_price));
    }

    async function deleteItem(productId: string) {
        await deleteCartItem(parseInt(productId));
        setCarts(carts?.filter(cart => cart.product_id !== productId));
    }

    return (
        <div>
            <div className="w-screen min-h-screen pt-20 md:px-10 md:pb-10 p-2">
                <h1 className="font-bold text-4xl mb-4">Warenkorb</h1>
                <div className={clsx("bg-electos-black-700 h-fit text-electos-white rounded-xl p-2 w-full flex flex-col gap-4 transition-opacity duration-300 ease-in-out", carts ? "opacity-100" : "opacity-0")}>
                    {carts?.map((item, key) => {
                        return (
                            <div key={key}>
                                <CartItem item={item} deleteItem={deleteItem} updateSum={updateSum} />
                            </div>
                        );
                    })}
                </div>
                <div className={clsx("mt-8 w-full flex items-center justify-center flex-col gap-4 transition-opacity duration-300 ease-in-out", carts ? "opacity-100" : "opacity-0")}>
                    Gesamtpreis: {sum.toFixed(2)}€
                    <CommitCart />
                </div>
            </div>
            {!carts && !showNoItems &&
                <div className="absolute w-screen h-screen left-0 top-0 flex items-center justify-center">
                    <LoadingIcon className="fill-electos-black-950 w-40 h-40" />
                </div>
            }
            {showNoItems &&
                <div className="absolute w-screen h-screen left-0 top-0 flex items-center justify-center text-2xl font-bold">
                    Keine Produkte im Warenkorb.
                </div>
            }
        </div>
    );
}

function CommitCart() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleCommit() {
        setLoading(true);
        commitCart().then(() => {
            setLoading(false);
            setShowModal(true);
        });
    }

    return (
        <div>
            {loading ?
                <LoadingIcon className="fill-electos-black-950 w-24 h-24" />
                :
                <button className="py-2 px-4 bg-electos-green-500 text-electos-white font-semibold rounded-md hover:bg-electos-green-600 transition-colors duration-300 ease-in-out"
                    onClick={handleCommit}
                >
                    Kaufen
                </button>
            }
            <CartModal isOpen={showModal} setOpen={setShowModal} />
        </div>
    );
}

interface CartModalProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

function CartModal({ isOpen, setOpen }: CartModalProps) {
    const router = useRouter();

    function closeModal() {
        setOpen(false);
        
        setTimeout(() => {
            router.push("/dashboard");
        }, 500);
    }
  
    return (
      <div className={clsx("fixed inset-0 bg-electos-black-700 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center transition-all duration-500 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={clsx("p-8 border w-96 shadow-lg rounded-md bg-electos-black-100 transition-all duration-500 ease-in-out", isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75")}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-electos-black-950">Kauf getätigt</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-electos-black-500 text-balance">Klicken Sie hier um zu ihrem Konto zu gelangen und ihre Rechnung einzusehen.</p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-electos-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-electos-green-600 focus:outline-none focus:ring-2 focus:ring-electos-green-300"
              >
                Konto
              </button>
  
            </div>
          </div>
        </div>
      </div>
    );
}