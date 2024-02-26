

import { auth } from "@/auth"
import { NextResponse } from "next/server";

export const GET = auth((req) => {
    return NextResponse.json({message: req}, {status: 201});
}) as any;