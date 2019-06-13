import { Customer } from './customer';

export class Order {
    id: number;
    businessId: number;
    customerId: number;
    customerName: string;
    item: string;
    price: number;
    qty: number;
    deliveryDate: string;
    modeOfShipment: string;
    customer: Customer = new Customer();
    // orderStatus: {
    //     productionStatus: string;
    //     orderStatus: string;
    //     warehouseStatus: string;
    // }

    constructor() {
        this.id = null;
        this.businessId = null;
        this.customerId = null;
        this.customerName = null;
        this.item = null;
        this.price = null;
        this.qty = null;
        this.deliveryDate = null;
        this.modeOfShipment = null;
        // this.orderStatus.productionStatus = null;
        // this.orderStatus.orderStatus = null;
        // this.orderStatus.warehouseStatus = null;
    }
}