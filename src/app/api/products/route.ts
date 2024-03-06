import { getSession } from "@/actions/session";
import { pool } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const qParams = req.nextUrl.searchParams.get("catId") as string;
    const conn = await pool.getConnection();
    try {
        const [rows] = await conn.query(`
        SELECT
            p.product_id as product_id,
            p.name AS product_name,
            p.description AS product_description,
            p.price AS product_price,
            p.image AS product_image,
            m.name AS manufacturer_name
            FROM 
                product p
            INNER JOIN 
                category c ON p.fk_category_id = c.category_id
            INNER JOIN 
                manufacturer m ON p.fk_manufacturer_id = m.manufacturer_id
            ${qParams != "all" ? "WHERE p.fk_category_id = ?;" : ";"}`, qParams
        );
        conn.release();

        return NextResponse.json({ products: rows });
    } catch (err) {
        conn.release();
        return NextResponse.json({ error: err });
    }
}