import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  apiUrl = "http://localhost:8080/enquiry";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  getEnquiry(id) {
    return this.http.get(this.apiUrl + '/${id}');
  }

  addEnquiry(enquiry) {
    return this.http.post(this.apiUrl, enquiry);
  }
}
