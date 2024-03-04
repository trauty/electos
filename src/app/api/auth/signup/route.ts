import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/db";
import * as argon2 from "argon2";
import { UserCast } from "@/types";

export async function POST(req: NextRequest) {
    const newUser = await req.formData();

    const hashedPassword = await argon2.hash(newUser.get("password") as string);
    newUser.set("password", hashedPassword);

    const user = Object.fromEntries(newUser.entries());
    const conn = await pool.getConnection();

    try {
        await conn.query("START TRANSACTION");
        await conn.query("INSERT INTO account SET ?;", user);
        const [rows] = await conn.query("SELECT * FROM account WHERE email = ?;", user["email"]);
        const users = rows as UserCast[];
        console.log(users);
        await conn.query("INSERT INTO cart(fk_account_id) VALUES(?);", users.at(0)?.account_id);
        await conn.query("COMMIT");
        conn.release();
        return NextResponse.json({ message: "Konto erstellt." }, { status: 201 });
    } catch (err) {
        await conn.query("ROLLBACK");
        conn.release();
        const sqlError = err as any;
        if (sqlError.code == "ER_DUP_ENTRY") {
            return NextResponse.json({ message: "Ein Konto unter dieser E-Mail-Adresse existiert bereits." }, { status: 403 });
        } else {
            return NextResponse.json({ message: err }, { status: 500 });
        }
    }
}