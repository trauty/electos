"use server";

import { redirect } from "next/navigation";
import { pool } from "@/db";
import { getSession } from "./session";


export async function addToCart(productId: number, count: number) {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    try {
        const conn = await pool.getConnection();
        await conn.query("INSERT INTO products_in_cart VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + VALUES(amount);", [productId, session.id, count]);
        conn.release();
        return true;
    } catch (err) {
        return false;
    }
}