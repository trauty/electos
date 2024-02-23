import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { User } from "./types";

async function getUser(email: string): Promise<User | undefined> {

}

export const { auth, signIn, signOut, handlers: {GET, POST} } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(8)})
                    .safeParse(credentials);
                
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) { return null; }
                }

                return null;
            }
        })
    ],
});