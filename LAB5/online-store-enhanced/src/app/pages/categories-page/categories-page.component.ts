import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent {
  term = '';
  categories: string[];
  selectedCategory: string;
  items: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.categories = Array.from(
        new Set(data.map((product) => product.category))
      );
      this.items = data;
    });
  }

  onSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedCategory = target.value;
  }
  
  get filteredProducts(): IProduct[] {
    return this.items.filter(
      (product) => product.category === this.selectedCategory
    );
  }
}
