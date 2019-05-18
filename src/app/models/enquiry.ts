import { Customer } from './customer';
import { EnquiryItem } from './enquiry-item';

export class Enquiry {
    id: number;
    item: string;
    qty: number;
    itemAvailability: string;
    deliveryMethod: string;
    courierName: string;
    courierTelephone: number;
    creditStatus: string;

    customer: Customer = new Customer();
    enquiryItems: EnquiryItem[] = [];

    constructor() {
        this.id = null;
        this.item = null;
        this.qty = null;
        this.itemAvailability = null;
        this.deliveryMethod = null;
        this.courierName = null;
        this.courierTelephone = null;
        this.creditStatus = null;
    }
}