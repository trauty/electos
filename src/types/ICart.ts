import { RowDataPacket } from "mysql2";

export interface ICart extends RowDataPacket {
    cart_id: number;
};