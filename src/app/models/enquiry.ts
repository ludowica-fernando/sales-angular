export class Enquiry {
    id: number;
    customerId: number;
    item: string;
    qty: number;
    itemAvailability: string;
    deliveryMethod: string;
    courierName: string;
    courierTelephone: number;
    creditStatus: string;

    constructor() {
        this.id = null;
        this.customerId = null;
        this.item = null;
        this.qty = null;
        this.itemAvailability = null;
        this.deliveryMethod = null;
        this.courierName = null;
        this.courierTelephone = null;
        this.creditStatus = null;
    }
}