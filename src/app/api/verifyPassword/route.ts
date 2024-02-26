import * as argon2 from "argon2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const passwords = await req.formData();

    const userPassword = passwords.get("password")!.toString();
    const hash = passwords.get("hash")!.toString();

    try {
        if (await argon2.verify(hash, userPassword)) {
            return NextResponse.json({ message: true }, { status: 200 });
        } else {
            return NextResponse.json({ message: false }, { status: 403 });
        }
    } catch (err) {
        return NextResponse.json({ message: false }, { status: 403 });
    }
}