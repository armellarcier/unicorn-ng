import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../reducers';
import { getUnicorns } from './unicorns.selectors';

// selectors
const getCart = createFeatureSelector<number[]>('cart');
const getCartUnicorns = createSelector(getCart, getUnicorns, (cart, unicorns) =>
    cart.map(id => unicorns.find(u => u.id === id)),
);
const isInCart = createSelector(getCart, (state: number[], prop: { id: number }) => state.some(id => id === prop.id));

@Injectable({ providedIn: 'root' })
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}

    cart$ = this.store.select(getCartUnicorns);
    isInCart$ = (id: number) => this.store.select(isInCart, { id });
}
