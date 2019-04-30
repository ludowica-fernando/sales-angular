import { Order } from './../models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl = "/api/orders";

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  getOrder(id) {
    return this.http.get<Order>(this.apiUrl + `/${id}`);
  }

  addOrder(order){
    return this.http.post(this.apiUrl, order);
  }

  updateOrder(order) {
    return this.http.put(this.apiUrl, order);
  }

  deleteOrder(id) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}
