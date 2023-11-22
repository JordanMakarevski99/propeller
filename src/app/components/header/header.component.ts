import { Component } from '@angular/core';
import { ProductsService } from 'src/app/modules/products/services/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private productsService: ProductsService) {
    this.addedItemsCount();
  }
  totalItems = 0;
  private addedItemsCount(): void {
    this.productsService.getOrderItemsAsObservable().subscribe((result) => {
      this.totalItems = result.length;
    });
  }
}
