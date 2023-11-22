import { createAction, props } from '@ngrx/store';

export const setSorting = createAction(
  '[Product List] Set Sorting',
  props<{ sorting: 'ASC' | 'DESC' }>()
);
export const setSearchTerm = createAction(
  '[Product List] Set Search Term',
  props<{ searchTerm: string }>()
);
