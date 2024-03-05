"use server";

import { redirect } from "next/navigation";
import { pool } from "@/db";
import { getSession } from "./session";


export async function updateCart(productId: number, count: number) {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    try {
        const conn = await pool.getConnection();
        await conn.query("UPDATE products_in_cart SET amount = ? WHERE fk_product_id = ?;", [count, productId]);
        conn.release();
        return true;
    } catch (err) {
        return false;
    }
}