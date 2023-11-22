import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './models/Product';
import { ProductsService } from './services/products.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Store, select } from '@ngrx/store';
import * as productsActions from '../products/actions/products.actions';
import { ProductsState } from './models/ProductsState';
import { of, take } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private store: Store<{ productList: ProductsState }>,
    private productsService: ProductsService,
    private router: Router
  ) {}

  products$: Observable<{ items: Product[]; totalItems: number }> = of({
    items: [],
    totalItems: 0,
  });
  pageSize: number = 12;
  pageIndex: number = 0;
  length = 0;
  pageSizeOptions = [6, 12, 18];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  orderItemsLength!: number;
  searchTerm: string = '';
  sortDirection: 'ASC' | 'DESC' = 'ASC';
  ngOnInit(): void {
    this.store
      .pipe(select('productList'), take(1))
      .subscribe((productsState: ProductsState) => {
        this.sortDirection = productsState.sorting;
        this.searchTerm = productsState.searchTerm;
        this.loadProducts();
      });
  }

  loadProducts(): void {
    this.productsService
      .getProducts(
        this.pageSize,
        this.pageIndex + 1,
        this.searchTerm,
        this.sortDirection
      )
      .subscribe((result) => {
        console.log(result);
        this.products$ = of(result);
        this.length = result.totalItems;
      });
  }

  addToCart(product: Product): void {
    this.productsService.addToOrder(product);
  }

  getOrderItems(): Observable<Product[]> {
    return this.productsService.getOrderItemsAsObservable();
  }

  handlePageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }
  sortByName(direction: 'ASC' | 'DESC'): void {
    this.store.dispatch(productsActions.setSorting({ sorting: direction }));

    this.loadProducts();
  }
  applySearch(): void {
    this.store.dispatch(
      productsActions.setSearchTerm({ searchTerm: this.searchTerm })
    );
    this.loadProducts();
  }

  navigateToProductDetails(productId: string): void {
    this.router.navigate(['/products/product-details', productId]);
  }
  hoveredProductId: string | null = null;

  setHoveredProduct(productId: string | null): void {
    this.hoveredProductId = productId;
  }

  isHovered(product: Product): boolean {
    return this.hoveredProductId === product.id;
  }
}
