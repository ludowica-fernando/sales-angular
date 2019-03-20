import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl = "http://localhost:8080/orders";

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  getCustomer(id) {
    return this.http.get(this.apiUrl + '/${id}');
  }

  addOrder(order){
    return this.http.post(this.apiUrl, order);
  }
}
