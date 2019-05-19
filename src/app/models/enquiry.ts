import { Customer } from './customer';
import { EnquiryItem } from './enquiry-item';

export class Enquiry {
    id: number;
    deliveryMethod: string;
    courierName: string;
    courierTelephone: number;
    creditStatus: string;

    customer: Customer = new Customer();
    enquiryItems: EnquiryItem[] = [];

    constructor() {
        this.id = null;
        this.deliveryMethod = null;
        this.courierName = null;
        this.courierTelephone = null;
        this.creditStatus = null;
    }
}