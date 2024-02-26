import NextAuth, { User } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "./actions";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(8) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const hash = await getUser(email);
                    if (!hash) { return null; }

                    const bodyData = new FormData();
                    bodyData.append("password", password);
                    bodyData.append("hash", hash.toString());

                    const res = await fetch(process.env.BASE_URL + "/api/verifyPassword", {
                        method: "POST",
                        body: bodyData
                    });

                    const verified = res.status == 200;
                    
                    if (verified) {
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