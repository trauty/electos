"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";
import { pool } from "@/db";
import { ICartItem } from "@/types";

export async function getCart() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        const [cart] = await conn.query<ICartItem[]>(`
        SELECT p.product_id, p.name, p.description, p.price, p.image, pic.amount
        FROM products_in_cart pic
        JOIN product p ON pic.fk_product_id = p.product_id
        WHERE pic.fk_account_id = ?;`, [session.id]);
        conn.release();

        return cart;
    } catch (err) {
        conn.release();
        return null;
    }
}