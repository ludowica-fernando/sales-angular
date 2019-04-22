import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerList = [];

  customer: Customer = {
    id: null,
    name: null,
    tradingName: null,
    paymentFlag: null,
    mainLocation: null,
    deliveryLocation: null,
    collectionLocation: null,
    telephone: null,
    email: null
  };

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.viewAllCustomers();
  }

  viewAllCustomers() {
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
      console.log(data);
    });
  }
}
