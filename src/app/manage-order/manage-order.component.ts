import { CustomerService } from './../services/customer.service';
import { OrdersService } from './../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  id: string;
  isReadOnly = true;
  orderList = [];
  customerList: Customer[] = [];
  orderDetails: Order = new Order();
  customerDetails: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.orderService.getOrder(this.id).subscribe(data => {
        this.orderDetails = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  fetchData(){
    this.customerService.getAll().subscribe(data =>{
      this.customerList = data;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

  delete() {
    this.orderService.deleteOrder(this.id).subscribe(data => {
      this.router.navigateByUrl('orders');
      console.log(data);
    });
  }

  onSubmit() {
    this.orderService.addOrder(this.orderDetails).subscribe(data => {
      console.log(data);
    });
  }

  compareByOptionId(idFirst, idSecond) {
    return idFirst && idSecond && idFirst.id == idSecond.id;
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

  // createOrder() {
  //   this.orderService.addOrder(this.order).subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
