import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl = "/api/items";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Item[]>(this.apiUrl);
  }

}
