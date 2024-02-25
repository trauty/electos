import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/db.config";

export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
    try {
        const [res] = await conn.query(`SELECT firstName, lastName FROM Users WHERE email = ?;`, [ctx.params.id]);

        if (res instanceof Array && res.length == 0) {
            return NextResponse.json({ message: "Konto nicht gefunden." }, { status: 404 });
        }

        const user = res as any[];

        return NextResponse.json(user[0], { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Serverfehler." }, { status: 500 });
    }
}