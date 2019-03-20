import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customer: Customer = {
    id: null,
    name: null,
    tradingName: null,
    paymentFlag: null,
    customerContact: {
      mainLocation: null,
      deliveryLocation: null,
      collectionLocation: null,
      telephone: null,
      email: null
    }
  };

  customerList = [];
  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createCustomer(form) {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer).subscribe(data => {
      console.log(data);
    });
  }
}
