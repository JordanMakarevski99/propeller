import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/Product';
import { ProductDetailsService } from './product-details.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productssService: ProductsService,
    private productDetailsService: ProductDetailsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  product$!: Observable<Product>;
  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      map((id: string | null) => (id ? Number(id) : 0)),
      switchMap((productId: number) =>
        this.productDetailsService.getProductById(productId)
      )
    );
  }
  addToCart(product: Product) {
    this.productssService.addToOrder(product);
    this.snackBar.open('Item added to the shopping cart', 'Dismiss', {
      duration: 1500,
    });
  }
  navigateToShop() {
    this.router.navigate(['/products']);
  }
  navigateToShoppingCart() {
    this.router.navigate(['/order-details']);
  }
}
