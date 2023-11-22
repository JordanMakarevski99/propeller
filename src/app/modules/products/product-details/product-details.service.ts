import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, Query } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private apollo: Apollo) {}

  getProductById(productId: number): Observable<Product> {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query GetProductById($productId: ID!) {
            product(id: $productId) {
              id
              name
              description
              featuredAsset {
                source
              }
            }
          }
        `,
        variables: {
          productId,
        },
      })
      .valueChanges.pipe(map((result) => result.data.product));
  }
}
