"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";
import { pool } from "@/db";
import { IReceipt } from "@/types";

export async function getReceipts() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect("/auth/signin");
    }

    const conn = await pool.getConnection();
    try {
        const [receipts] = await conn.query<IReceipt[]>(`
            SELECT 
            receipt.receipt_id, 
            receipt.created_at,
            SUM(product.price * receipt_products.amount) AS total_sum
            FROM receipt
            JOIN account ON receipt.fk_account_id = account.account_id
            JOIN receipt_products ON receipt.receipt_id = receipt_products.fk_receipt_id
            JOIN product ON receipt_products.fk_product_id = product.product_id
            WHERE account.account_id = ?
            GROUP BY receipt.receipt_id;`, [session.id]
        );
        conn.release();

        if(receipts.length <= 0) {
            return null;
        }

        return receipts;
    } catch (err) {
        conn.release();
        return null;
    }
}