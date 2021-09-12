export class Bill {
    
    billId: number;
    billDate: string;
    totalItem: number;
    totalCost: number;
    
    toString() {
        return this.billId + " "+ this.billDate + " "+ this.totalItem + " "+ this.totalCost;
    }
}