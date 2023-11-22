import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, Query } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo) {}
  private orderItemsSubject = new BehaviorSubject<Product[]>([]);

  getProducts(
    pageSize: number,
    currentPage: number,
    searchTerm: string = '',
    sortDirection: string = 'ASC'
  ): Observable<{ items: Product[]; totalItems: number }> {
    console.log(
      'getProducts params:',
      pageSize,
      currentPage,
      searchTerm,
      sortDirection
    );

    return this.apollo
      .watchQuery<Query>({
        query: gql`
          query GetProducts($options: ProductListOptions) {
            products(options: $options) {
              items {
                id
                name
                featuredAsset {
                  source
                  type
                }
                variants {
                  price
                }
              }
              totalItems
            }
          }
        `,
        variables: {
          options: {
            skip: (currentPage - 1) * pageSize,
            take: pageSize,
            sort: {
              name: sortDirection,
            },
            filter: {
              name: {
                contains: searchTerm,
              },
            },
          },
        },
      })
      .valueChanges.pipe(map((result) => result.data.products));
  }

  removeFromOrder(productId: string): void {
    const orderItems = this.orderItemsSubject.value;
    const itemToRemove = orderItems.findIndex((item) => item.id === productId);

    if (itemToRemove !== -1) {
      const updatedOrder = [
        ...orderItems.slice(0, itemToRemove),
        ...orderItems.slice(itemToRemove + 1),
      ];
      this.orderItemsSubject.next(updatedOrder);
      console.log(this.orderItemsSubject);
    }
  }

  addToOrder(product: Product): void {
    this.orderItemsSubject.next([...this.orderItemsSubject.value, product]);
  }
  getOrderItemsAsObservable(): Observable<Product[]> {
    return this.orderItemsSubject.asObservable();
  }
}
