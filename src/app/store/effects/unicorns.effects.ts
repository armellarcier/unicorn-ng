import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';
import * as UnicornsActions from '../actions/unicorns.action';

@Injectable()
export class UnicornsEffects {
    constructor(private actions$: Actions, private unicornsService: UnicornsService) {}

    getUnicorn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.getUnicorn),
            switchMap(action =>
                this.unicornsService.getById(action.id).pipe(
                    map(unicorn => UnicornsActions.getUnicornSuccess({ unicorn })),
                    catchError(() => of(UnicornsActions.getUnicornError())),
                ),
            ),
        ),
    );
    getUnicorns$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.getUnicorns),
            switchMap(() =>
                this.unicornsService.getAll().pipe(
                    map(unicorns => UnicornsActions.getUnicornsSuccess({ unicorns })),
                    catchError(() => of(UnicornsActions.getUnicornsError())),
                ),
            ),
        ),
    );
    deleteUnicorns$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.deleteUnicorn),
            switchMap(action =>
                this.unicornsService.delete(action.unicorn.id).pipe(
                    map(() => UnicornsActions.deleteUnicornSuccess({ unicorn: action.unicorn })),
                    catchError(() => of(UnicornsActions.deleteUnicornError())),
                ),
            ),
        ),
    );
    updateUnicorn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.updateUnicorn),
            switchMap(action =>
                this.unicornsService.update(action.unicorn.id, action.unicorn).pipe(
                    map(() => UnicornsActions.updateUnicornSuccess({ unicorn: action.unicorn })),
                    catchError(() => of(UnicornsActions.updateUnicornError())),
                ),
            ),
        ),
    );

    //    updateUnicorn$ = ...
    //    deleteUnicorn$ = ...
}
