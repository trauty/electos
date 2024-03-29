"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";
import { pool } from "@/db";

export async function deleteCartItem(productId: number) {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        await conn.query("DELETE FROM products_in_cart WHERE fk_product_id = ? AND fk_account_id = ?;", [productId, session.id]);
        conn.release();

        return true;
    } catch (err) {
        conn.release();
        return false;
    }
}