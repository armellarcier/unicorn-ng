import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../reducers';
import { UnicornWithCapacitiesLabels } from './../../shared/services/unicorns.service';

// selectors
const getUnicorns = createFeatureSelector<UnicornWithCapacitiesLabels[]>('unicorns');
const getUnicorn = createSelector(getUnicorns, (state: UnicornWithCapacitiesLabels[], prop: { id: number }) => {
    return state.find(u => u.id === prop.id);
});

@Injectable({ providedIn: 'root' })
export class UnicornsSelectors {
    constructor(private store: Store<EntityState>) {}

    unicorns$ = this.store.select(getUnicorns);
    unicorn$ = (id: number) => this.store.select(getUnicorn, { id });
}
