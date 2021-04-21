import { createReducer, on } from '@ngrx/store';
import { deleteUnicornSuccess, getUnicornsSuccess, updateUnicornSuccess } from '../actions/unicorns.action';
import { Unicorn } from './../../shared/models/unicorn.model';
import { getUnicornSuccess } from './../actions/unicorns.action';

const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
    on(getUnicornSuccess, (state, { unicorn }) => {
        const unicornIsPresent = state.some(u => u.id === unicorn.id);
        if (unicornIsPresent) {
            return state.map(u => (u.id === unicorn.id ? unicorn : u));
        } else {
            return state.concat(unicorn);
        }
    }),
    on(updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id !== unicorn.id ? u : { ...u, unicorn }))),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
);
