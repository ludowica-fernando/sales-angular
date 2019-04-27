import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';
import { Enquiry } from '../models/enquiry';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {

  id: string;
  isReadOnly = true;
  enquiryList = [];
  enquiryDetails: Enquiry = new Enquiry();

  constructor(
    private route: ActivatedRoute,
    private enquiryService: EnquiryService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.enquiryService.getEnquiry(this.id).subscribe(data => {
        this.enquiryDetails = data;
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
    this.enquiryService.deleteEnquiry(this.id).subscribe(data => {
      this.router.navigateByUrl('enquiries');
      console.log(data);
    });
  }

  onSubmit() {
    this.enquiryService.addEnquiry(this.enquiryDetails).subscribe(data => {
      console.log(data);
    });
  }

  // createEnquiry(form) {
  //   this.enquiryService.addEnquiry(form).subscribe(data => {
  //     console.log(form);
  //   });
  // }
}
