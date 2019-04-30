import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})

export class ViewOrderComponent implements OnInit {

  orderList = [];

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
