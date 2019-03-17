import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createEnquiry(form) {
    console.log(form);
  }
}
