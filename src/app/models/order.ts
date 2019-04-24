export interface Order {
    id: number,
    businessId: number,
    customerName: string,
    item: string,
    price: number,
    qty: number,
    deliveryDate:string,
    modeOfShipment: string,
    orderStatus: {
        productionStatus: string,
        orderStatus: string,
        warehouseStatus: string
    }
}