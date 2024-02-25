import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/db.config";

export async function GET(req: NextRequest) {
    const [rows] = await conn.query(`SELECT firstName, lastName FROM Users;`);
    return NextResponse.json({message: rows, status: 200});
}