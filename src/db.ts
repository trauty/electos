import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "electos",
    waitForConnections: true,
    connectionLimit: 20,
    maxIdle: 20,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});