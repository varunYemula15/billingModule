import { Order } from "./order";

export class NewBill {
    billDate: string;
    totalItem: number;
    totalCost: number;
    order: Order | number;
    billId: number;
}