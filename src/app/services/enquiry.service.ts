import { Enquiry } from './../models/enquiry';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  apiUrl = "/api/enquiries";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  getEnquiry(id) {
    return this.http.get<Enquiry>(this.apiUrl + `/${id}`);
  }

  addEnquiry(enquiry) {
    return this.http.post(this.apiUrl, enquiry);
  }

  updateEnquiry(enquiry) {
    return this.http.put(this.apiUrl, enquiry);
  }

  deleteEnquiry(id) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}
