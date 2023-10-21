import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.component.html' ,
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemsCount = 12;

  onSortUpdated(newSort: string): void{
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void{
    this.itemsCount = count;
  }

}
