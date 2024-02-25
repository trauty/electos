import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/db.config";

export async function GET(req: NextRequest) {
    await conn.query(`
    CREATE TABLE Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        street VARCHAR(255) NOT NULL,
        plz VARCHAR(10) NOT NULL,
        location VARCHAR(100) NOT NULL,
        iban VARCHAR(34) NOT NULL,
        blz VARCHAR(8) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`);
    return NextResponse.json({ message: "Setup dev.", status: 200 });
};

export async function DELETE(req: NextRequest) {
    await conn.query(`DROP TABLE Users;`);
    return NextResponse.json({ message: "Deleted dev.", status: 200 });
};