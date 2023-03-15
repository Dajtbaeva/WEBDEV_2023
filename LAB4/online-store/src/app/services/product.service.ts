import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/items', {
      params: new HttpParams().append('limit', 5),
    });
  }
}
// https://fakestoreapi.com/products