import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private URL = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }
  getURL(): string {
    return this.URL;
  }
}
