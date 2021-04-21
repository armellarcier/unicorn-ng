import { ActionReducerMap } from '@ngrx/store';
import { Unicorn } from './../../shared/models/unicorn.model';
import { cartReducer } from './cart.reducers';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
    unicorns: Unicorn[];
    cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    cart: cartReducer,
};
