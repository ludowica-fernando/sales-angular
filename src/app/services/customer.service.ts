import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "/api/customers";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  getCustomer(id) {
    return this.http.get<Customer>(this.apiUrl + `/${id}`);
  }

  addCustomer(customer) {
    return this.http.post(this.apiUrl, customer);
  }

  updateCustomer(customer) {
    return this.http.put(this.apiUrl, customer);
  }

  deleteCustomer(id) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}