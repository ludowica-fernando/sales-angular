export class Enquiry {
    id: number;
    customerId: number;
    item: string;
    qty: number;
    itemAvailability: string;
    deliveryMethod: string;
    creditStatus: string;

    constructor() {
        this.id = null;
        this.customerId = null;
        this.item = null;
        this.qty = null;
        this.itemAvailability = null;
        this.deliveryMethod = null;
        this.creditStatus = null;
    }
}