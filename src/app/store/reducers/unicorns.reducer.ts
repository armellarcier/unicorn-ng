import { createReducer, on } from '@ngrx/store';
import { deleteUnicornSuccess, getUnicornsSuccess, updateUnicornSuccess } from '../actions/unicorns.action';
import { UnicornWithCapacitiesLabels } from './../../shared/services/unicorns.service';

const initialState: UnicornWithCapacitiesLabels[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
    on(updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id !== unicorn.id ? u : { ...u, unicorn }))),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
);
