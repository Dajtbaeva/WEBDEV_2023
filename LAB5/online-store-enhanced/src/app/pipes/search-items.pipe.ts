import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'searchItems',
})
export class SearchItemsPipe implements PipeTransform {
  transform(items: IProduct[], search: string): IProduct[] {
    return items.filter((i) =>
      i.title.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
}
