import { createReducer, on } from '@ngrx/store';
import { toggleUnicornFromCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.action';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(toggleUnicornFromCart, (state, { id: toggleId }) => {
        const isInCart = state.some(id => id === toggleId);
        if (isInCart) {
            return state.filter(id => id !== toggleId);
        }
        return [...state, toggleId];
    }),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(id => id !== unicorn.id)),
);
