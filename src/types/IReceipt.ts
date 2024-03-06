import { RowDataPacket } from "mysql2";

export interface IReceipt extends RowDataPacket {
    receipt_id: string;
    created_at: string;
    total_sum: string;
}