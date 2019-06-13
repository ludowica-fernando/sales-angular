import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})

export class ViewEnquiryComponent implements OnInit {

  enquiryList = [];

  constructor(
    private enquiryService: EnquiryService
  ) { }

  ngOnInit() {
    this.viewAllEnquiries();
  }

  viewAllEnquiries() {
    this.enquiryService.getAll().subscribe(data => {
      this.enquiryList = data;
      console.log(data);
    });
  }

}
