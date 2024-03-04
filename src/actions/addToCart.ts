"use server";

import { redirect } from "next/navigation";
import { pool } from "@/db";
import { ICart } from "@/types";
import { getSession } from "./session";


export async function addToCart(productId: number, count: number) {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        await conn.query("START TRANSACTION");
        const [carts] = await conn.query<ICart[]>("SELECT * FROM cart WHERE fk_account_id = ?;", session.id);
        const cartId = carts.at(0)?.cart_id;
        await conn.query("INSERT INTO products_in_cart VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + VALUES(amount);", [productId, cartId, count]);
        await conn.query("COMMIT");
        conn.release();
        return true;
    } catch (err) {
        await conn.query("ROLLBACK");
        return false;
    }
}