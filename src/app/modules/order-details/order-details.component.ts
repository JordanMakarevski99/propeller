import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/models/Product';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) {}

  orderItems!: Product[];
  ngOnInit(): void {
    this.productsService.getOrderItemsAsObservable().subscribe((result) => {
      this.orderItems = result;
    });
  }
  removeFromOrder(productId: string): void {
    this.productsService.removeFromOrder(productId);
    this.snackBar.open('Item removed from shopping cart', 'Dismiss', {
      duration: 1500,
    });
  }
}
