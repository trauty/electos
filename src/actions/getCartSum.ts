"use server";

import { redirect } from "next/navigation";
import { pool } from "@/db";
import { getSession } from "./session";
import { ISum } from "@/types";


export async function getCartSum() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        const [sums] = await conn.query<ISum[]>(`
            SELECT SUM(p.price * pic.amount) AS total_price
            FROM products_in_cart pic
            JOIN product p ON pic.fk_product_id = p.product_id
            WHERE pic.fk_account_id = ?;`, [session.id]);
        conn.release();
        return sums.at(0);
    } catch (err) {
        conn.release();
        return null;
    }
}