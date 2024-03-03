"use server";

import { pool } from "@/db";
import { SessionData, defaultSession, sessionOptions } from "@/session-lib";
import { UserCast } from "@/types";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import * as argon2 from "argon2";
import { redirect } from 'next/navigation'

export async function getSession(dbQuery = true) {
    "use client";
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.id = defaultSession.id;
        session.email = defaultSession.email;
        session.firstName = defaultSession.firstName;
        session.lastName = defaultSession.lastName;
        session.street = defaultSession.street;
        session.plz = defaultSession.plz;
        session.location = defaultSession.location;
        session.iban = defaultSession.iban;
        session.blz = defaultSession.blz;
        session.institution = defaultSession.institution;
        session.createdAt = defaultSession.createdAt;
        session.updatedAt = defaultSession.updatedAt;
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    if (dbQuery) {
        try {
            const conn = await pool.getConnection();
            const [rows] = await conn.query(`SELECT * FROM account WHERE email = ?;`, session.email);
            conn.release();
            if (rows instanceof Array && rows.length == 0) {
                return session;
            }

            const userArray = rows as UserCast[];

            const user = userArray.at(0)!;

            session.id = user.id;
            session.email = user.email;
            session.firstName = user.firstName;
            session.lastName = user.lastName;
            session.street = user.street;
            session.plz = user.plz;
            session.location = user.location;
            session.iban = user.iban;
            session.blz = user.blz;
            session.institution = user.institution;
            session.createdAt = user.created_at;
            session.updatedAt = user.updated_at;
            session.isLoggedIn = true;

        } catch (err) {
            return session;
        }
    }

    return session;
}

export async function signout() {
    "use server";

    const session = await getSession(false);
    session.destroy();
    revalidatePath("/");
    redirect("/auth/signin");
}

export async function signin(prevState: string | undefined, formData: FormData) {
    "use server";

    try {
        if (!formData.get("email") || !formData.get("password"))
        {
            return "Überprüfen Sie ihre Angaben.";
        }

        const conn = await pool.getConnection();
        const [rows] = await conn.query(`SELECT password FROM account WHERE email = ?;`, [formData.get("email")!]);
        conn.release();

        if (rows instanceof Array && rows.length == 0) {
            return "Kein Konto mit dieser Kombination gefunden.";
        }

        const hashes = rows as any[];

        if (await argon2.verify(hashes.at(0).password, formData.get("password")!.toString())) {
            const session = await getSession(false);
            session.email = formData.get("email")!.toString();
            session.isLoggedIn = true;
            await session.save();
            revalidatePath("/");
            
        } else {
            return "Kein Konto mit dieser Kombination gefunden.";
        }

    } catch (err) {
        console.log(err)
        return "Kein Konto mit dieser Kombination gefunden.";
    }

    redirect("/dashboard");
}