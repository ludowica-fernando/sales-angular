import { Item } from './item';

export class EnquiryItem {
    id: number;
    quantity: number;
    item: Item = new Item();

    constructor() {
        this.id = null;
        this.quantity = null;
    }
}