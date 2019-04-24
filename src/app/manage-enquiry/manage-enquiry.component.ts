import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {

  constructor(
    private enquiryService: EnquiryService
  ) { }

  ngOnInit() {
  }

  createEnquiry(form) {
    this.enquiryService.addEnquiry(form).subscribe(data => {
      console.log(form);
    });
  }
}
