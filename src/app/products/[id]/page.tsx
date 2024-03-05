"use server";

import { CategoryButton, ProductCard } from "@/components";
import { IProduct } from "@/types";

export default async function Products({ params }: { params: { id: string } }) {
    const res = await fetch(process.env.BASE_URL + `/api/products?catId=${params.id}`, { cache: 'no-store' });
    const data = await res.json();
    const products = data["products"] as IProduct[];
    
    return (
        <div className="w-screen min-h-screen pt-20 p-10">
            <h1 className="font-bold text-4xl mb-4">Produkte</h1>
            <div className="w-full h-fit flex flex-row">
                <CategoryButton />
            </div>
            <div className="h-full w-full rounded-xl pt-4 px-4 py-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 
                    justify-evenly justify-items-center items-center content-center gap-4">
                {products.map((product, key) => {
                    return (
                        <div key={key}>
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}