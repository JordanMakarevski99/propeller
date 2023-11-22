import { createReducer, on } from '@ngrx/store';
import * as productListActions from '../actions/products.actions';
import { ProductsState } from '../models/ProductsState';
export const initialState: ProductsState = {
  sorting: 'ASC',
  searchTerm: '',
};

export const productListReducer = createReducer(
  initialState,
  on(productListActions.setSorting, (state, { sorting }) => ({
    ...state,
    sorting,
  })),
  on(productListActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);
