import { Customer } from './customer';
import { EnquiryItem } from './enquiry-item';

export class Enquiry {
    id: number;
    deliveryMethod: string;
    courierName: string;
    courierTelephone: string;
    creditStatus: string;
    createdDate: Date;
    status : string;
    enquiryItems: EnquiryItem[] = [];
    customer: Customer = new Customer();

    constructor() {
        this.id = null;
        this.deliveryMethod = null;
        this.courierName = null;
        this.courierTelephone = null;
        this.creditStatus = null;
        this.createdDate = null;
        this.status = "Pending";
    }
}