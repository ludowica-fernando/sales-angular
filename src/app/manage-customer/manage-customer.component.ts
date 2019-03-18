import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customerList = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  createCustomer(form) {
    console.log(form);
    // this.customerService.addCustomer(form).subscribe();
  }
}
