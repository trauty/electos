import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/db.config";
import * as argon2 from "argon2";

export async function POST(req: NextRequest) {
    const newUser = await req.formData();

    const hashedPassword = await argon2.hash(newUser.get("password") as string);
    newUser.set("password", hashedPassword);

    const user = Object.fromEntries(newUser.entries());

    try {
        await conn.query('INSERT INTO Users SET ?', user);
        return NextResponse.json({ message: "Konto erstellt." }, {status: 201 });
    } catch (err) {
        const sqlError = err as any;
        if (sqlError.code == "ER_DUP_ENTRY") {
            return NextResponse.json({ message: "Ein Konto unter dieser E-Mail-Adresse existiert bereits." }, { status: 403 });
        } else {
            return NextResponse.json({ message: err }, { status: 500 });
        }
    }
}