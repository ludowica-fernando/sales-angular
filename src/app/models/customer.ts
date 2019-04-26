export class Customer {
    id: number;
    name: string;
    tradingName: string;
    paymentFlag: string;
    mainLocation: string;
    deliveryLocation: string;
    collectionLocation: string;
    telephone: number;
    email: string;

    constructor() {
        this.id = null;
        this.name = null;
        this.tradingName = null;
        this.paymentFlag = null;
        this.mainLocation = null;
        this.deliveryLocation = null;
        this.collectionLocation = null;
        this.telephone = null;
        this.email = null;
    }
}