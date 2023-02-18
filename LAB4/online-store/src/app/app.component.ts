import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
// import { items as data } from './data/products';
import { ProductsService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'online dishes store';
  items: IProduct[] = [];
  loading = false;
  term = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((data) => {
      this.items = data;
      this.loading = false;
    });
  }
}
