import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orderList = [];

  order: Order = {
    id: null,
    businessId: null,
    customerName: null,
    item: null,
    price: null,
    qty: null,
    deliveryDate: null,
    modeOfShipment: null,
    orderStatus: {
      productionStatus: null,
      orderStatus: null,
      warehouseStatus: null
    }
  }
  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.viewAllOrders();
  }

  viewAllOrders() {
    this.orderService.getAll().subscribe(data => {
      this.orderList = data;
    });
  }

}
