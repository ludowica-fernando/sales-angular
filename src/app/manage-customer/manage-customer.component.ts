import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
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

  edit() {
    this.isReadOnly = false;
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(data => {
      this.router.navigateByUrl('customers');
      console.log(data);
    });
  }

  onSubmit() {
    this.customerService.addCustomer(this.customerDetails).subscribe(data => {
      console.log(data);
    });
  }

}
