import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleUnicornFromCart } from '../actions/cart.actions';
import { EntityState } from '../reducers';

@Injectable({ providedIn: 'root' })
export class CartDispatchers {
    constructor(private store: Store<EntityState>) {}

    public toggleUnicornFromCart(id: number): void {
        this.store.dispatch(toggleUnicornFromCart({ id }));
    }
}
