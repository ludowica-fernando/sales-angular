import { Promotion } from './../models/promotion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  apiUrl = "/api/promotions";

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Promotion[]>(this.apiUrl);
  }
}
