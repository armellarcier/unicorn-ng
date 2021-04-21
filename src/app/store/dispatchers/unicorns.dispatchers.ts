import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUnicorn, getUnicorns, updateUnicorn } from '../actions/unicorns.action';
import { EntityState } from '../reducers';
import { Unicorn } from './../../shared/models/unicorn.model';
import { getUnicorn } from './../actions/unicorns.action';

@Injectable({ providedIn: 'root' })
export class UnicornsDispatchers {
    constructor(private store: Store<EntityState>) {}

    public getUnicorns(): void {
        this.store.dispatch(getUnicorns());
    }
    public getUnicorn(id: number): any {
        this.store.dispatch(getUnicorn({ id }));
    }

    public deleteUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(deleteUnicorn({ unicorn }));
    }

    public updateUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(updateUnicorn({ unicorn }));
    }
}
