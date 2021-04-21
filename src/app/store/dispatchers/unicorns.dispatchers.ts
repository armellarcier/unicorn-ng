import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUnicorn, getUnicorns, updateUnicorn } from '../actions/unicorns.action';
import { EntityState } from '../reducers';
import { Unicorn } from './../../shared/models/unicorn.model';

@Injectable({ providedIn: 'root' })
export class UnicornsDispatchers {
    constructor(private store: Store<EntityState>) {}

    public getUnicorns(): void {
        this.store.dispatch(getUnicorns());
    }

    public deleteUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(deleteUnicorn({ unicorn }));
    }

    public updateUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(updateUnicorn({ unicorn }));
    }
}
