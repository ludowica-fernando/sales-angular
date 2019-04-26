import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  id: string;
  isReadOnly = true;
  customerList = [];
  customerDetails: Customer = new Customer();

  constructor(
    private route : ActivatedRoute,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.customerService.getCustomer(this.id).subscribe(data => {
        this.customerDetails = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  getCustomer() {
    this.customerService.getCustomer(this.id).subscribe(data => {
      console.log(data);
    });
  }

  createCustomer(form) {
    this.customerService.addCustomer(form).subscribe(data => {
      console.log(data);
    });
  }






  onSubmit() {

    this.completeItemService.addOrUpdate(this.itemComplete).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }
}
