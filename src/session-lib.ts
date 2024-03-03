import { SessionOptions } from "iron-session";

export interface SessionData {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    street: string;
    plz: string;
    location: string;
    iban: string;
    blz: string;
    institution: string;
    createdAt: string;
    updatedAt: string;
    isLoggedIn: boolean;
};

export const defaultSession: SessionData = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    street: "",
    plz: "",
    location: "",
    iban: "",
    blz: "",
    institution: "",
    createdAt: "",
    updatedAt: "",
    isLoggedIn: false
};

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET as string,
    cookieName: "electos-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production"
    },
}