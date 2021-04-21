import { ActionReducerMap } from '@ngrx/store';
import { UnicornWithCapacitiesLabels } from './../../shared/services/unicorns.service';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
    unicorns: UnicornWithCapacitiesLabels[];
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    // here is where i put other reducers, when i have them
};
