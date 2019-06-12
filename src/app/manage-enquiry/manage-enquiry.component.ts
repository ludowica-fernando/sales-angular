import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';
import { Enquiry } from '../models/enquiry';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../services/customer.service';
import { ItemService } from '../services/item.service';
import { Customer } from '../models/customer';
import { Item } from '../models/item';
import { EnquiryItem } from '../models/enquiry-item';

@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {

  id: string;
  isReadOnly = true;
  enquiry: Enquiry = new Enquiry();
  newEnquiryItem: EnquiryItem = new EnquiryItem();
  customerList: Customer[] = [];
  itemList: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private enquiryService: EnquiryService,
    private customerService: CustomerService,
    private itemService: ItemService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

    this.fetchData();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.enquiryService.getEnquiry(this.id).subscribe(data => {
        this.enquiry = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  fetchData() {

    this.customerService.getAll().subscribe(data => {
      // console.log(data);
      this.customerList = data;
    });

    this.itemService.getAll().subscribe(data => {
      // console.log(data);
      this.itemList = data;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

  delete() {
    this.enquiryService.deleteEnquiry(this.id).subscribe(data => {
      this.router.navigateByUrl('enquiries');
      console.log(data);
    });
  }

  onSubmit() {

    // console.log(this.enquiry);

    this.enquiryService.addEnquiry(this.enquiry).subscribe(data => {
      // console.log(data);
      this.toastr.success("Successful!", "Success");
      this.router.navigateByUrl('/enquiries');
    });

  }

  compareByOptionId(idFirst, idSecond) {
    return idFirst && idSecond && idFirst.id == idSecond.id;
  }

  addItem() {

    if (this.newEnquiryItem.item.quantity < this.newEnquiryItem.quantity) {
      this.toastr.error("Insufficient Quantity!", "Error")
    }
    else if (this.newEnquiryItem.item.id && this.newEnquiryItem.quantity) {
      // console.log(this.newEnquiryItem);
      this.enquiry.enquiryItems.push(this.newEnquiryItem);
      this.newEnquiryItem = new EnquiryItem();
    }
    else {
      this.toastr.error("Empty Fields!", "Error")
    }

  }

  deleteItem(index) {
    this.enquiry.enquiryItems.splice(index, 1);
  }

}
