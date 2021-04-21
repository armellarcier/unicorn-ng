import { ActionReducerMap } from '@ngrx/store';
import { Unicorn } from './../../shared/models/unicorn.model';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
    unicorns: Unicorn[];
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    // here is where i put other reducers, when i have them
};
