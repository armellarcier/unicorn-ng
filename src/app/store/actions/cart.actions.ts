import { createAction, props } from '@ngrx/store';

// 🎯 cart
export const toggleUnicornFromCart = createAction('[Cart] TOGGLE_UNICORN_FROM_CART', props<{ id: number }>());
