"use server";

import NextAuth, { User } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { array, z } from "zod";
import * as argon2 from "argon2";
import { conn } from "./db.config";

interface SignInUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    street: string;
    plz: string;
    location: string;
    iban: string;
    blz: string;
    institution: string;
    created_at: Date;
    updated_at: Date;
};

interface DBCast {
    password: string;
}

async function getUser(email: string): Promise<String | undefined> {
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

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(8) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const userPassword = await getUser(email);
                    if (!userPassword) { return null; }
                    const passwordVerified = await argon2.verify(userPassword.toString(), password);
                    
                    if (passwordVerified) {
                        return {
                            email: email
                        };
                    }
                }

                return null;
            }
        })
    ],
    session: { strategy: "jwt" },
});