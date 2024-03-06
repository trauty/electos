import { RowDataPacket } from "mysql2";

export interface ISum extends RowDataPacket {
    total_price: string;
};