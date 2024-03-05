import { RowDataPacket } from "mysql2";

export interface ICartItem extends RowDataPacket {
    product_id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    amount: string;
};