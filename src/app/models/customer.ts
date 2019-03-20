export interface Customer {
    id: number,
    name: string,
    tradingName: string,
    paymentFlag: string,
    customerContact: {
        mainLocation: string,
        deliveryLocation: string,
        collectionLocation: string,
        telephone: number,
        email: string
    }
}