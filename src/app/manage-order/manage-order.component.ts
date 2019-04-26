import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

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
  };

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
  }

  // hide = true;
  // onChange(option) {
  //   if (option == 'courier') {
  //     this.hide = false;
  //   }
  //   else {
  //     this.hide = true;
  //   }
  // }

  createOrder() {
    this.orderService.addOrder(this.order).subscribe(data => {
      console.log(data);
    });
  }

}
