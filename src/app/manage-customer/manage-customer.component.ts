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

  customerList = [];
  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createCustomer(form) {
    this.customerService.addCustomer(form).subscribe(data => {
      console.log(data);
    });
  }
}
