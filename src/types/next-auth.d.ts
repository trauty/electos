import NextAuth, { User } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
            street: string;
            plz: string;
            location: string;
            iban: string;
            blz: string;
            institution: string;
            createdAt: Date;
            updatedAt: Date;
        };
    };
};