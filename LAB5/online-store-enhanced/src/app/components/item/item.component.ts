import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: IProduct;
  @Output() remove = new EventEmitter();
  likes = false;

  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  removeItem() {
    const itemId = this.item.id;
    this.remove.emit(itemId);
  }

  likeItem() {
    this.likes = !this.likes;
    this.likes ? (this.item.likes += 1) : (this.item.likes -= 1);
    this.http
      .put<IProduct>(
        this.productsService.getURL() + `/${this.item.id}`,
        this.item
      )
      .subscribe(() =>
        console.log(`Item ${this.item.id} updated successfully.`)
      );
  }
}
