"use client";

import { IProduct } from "@/types";
import Image from "next/image";

interface ProductCardProps {
    product: IProduct;
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border-[1px] border-electos-black-950 p-2 rounded-md w-48 flex flex-col justify-center items-center bg-electos-black-700 text-electos-white">
            <Image src={product.product_image} alt="product" width={152} height={152} className="rounded-md"/>
            <h2 className="font-semibold mr-auto">{product.product_name}</h2>
            <p className="w-full text-xs break-all truncate truncate-overflow mr-auto h-4">{product.product_description}</p>
            <p className="mr-auto">Preis: {product.product_price + "€"}</p>
        </div>
    );
}