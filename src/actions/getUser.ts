"use server";

import { conn } from "@/db.config";

interface DBCast {
    password: string;
}

export async function getUser(email: string): Promise<String | undefined> {
    try {
        const [res] = await conn.query(`SELECT password FROM Users WHERE email = ?;`, [email]);

        if (res instanceof Array && res.length == 0) {
            return undefined;
        }

        const passwords = res as DBCast[];

        return passwords.at(0)?.password;
    } catch (err) {
        return undefined;
    }
}