import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../models/enquiry';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})

export class ViewEnquiryComponent implements OnInit {
  enquiryList = [];

  customer: Enquiry = {
    id: null,
    customerId: null,
    item: null,
    qty: null,
    itemAvailability: null,
    deliveryMethod: null,
    creditStatus: null
  }

  constructor(
    private enquiryService: EnquiryService
  ) { }

  ngOnInit() {
    this.viewAllEnquiries();
  }

  viewAllEnquiries() {
    this.enquiryService.getAll().subscribe(data => {
      this.enquiryList = data;
    });
  }

}
