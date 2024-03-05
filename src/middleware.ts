import { getIronSession } from "iron-session";
import { NextRequest } from "next/server";
import { SessionData, sessionOptions } from "./session-lib";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        return Response.redirect(`${req.nextUrl.origin}/auth/signin`, 302);
    }
}


export const config = {
    matcher: [
        '/dashboard/:path*',
        '/cart/:path*',
    ],
};