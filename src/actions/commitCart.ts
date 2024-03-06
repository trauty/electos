"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";
import { pool } from "@/db";
import { RowDataPacket } from "mysql2";

export async function commitCart() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        await conn.query("START TRANSACTION;");
        await conn.query("INSERT INTO receipt(fk_account_id) VALUES(?);", [session.id]);
        const [rows] = await conn.query<RowDataPacket[]>("SELECT LAST_INSERT_ID() as receipt_id;");
        const receiptId = rows[0].receipt_id as string;
        await conn.query(`
            INSERT INTO receipt_products (fk_product_id, fk_receipt_id, amount)
            SELECT fk_product_id, ? as fk_receipt_id, amount
            FROM products_in_cart
            WHERE fk_account_id = ?;`, [receiptId, session.id]
        );
        await conn.query("DELETE FROM products_in_cart WHERE fk_account_id = ?;", [session.id]);
        await conn.query("COMMIT;");
        conn.release();

        return true;
    } catch (err) {
        await conn.query("ROLLBACK;");
        conn.release();
        return false;
    }
}