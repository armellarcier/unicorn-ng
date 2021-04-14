import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, of } from 'rxjs';
import { catchError, concatAll, map, mergeMap, reduce, share, tap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

export interface UnicornWithCapacitiesLabels extends Unicorn {
    capacitiesLabels: string[];
}

const addCapacitiesLabels = (unicorn: Unicorn, capacities: string[]): UnicornWithCapacitiesLabels => ({
    ...unicorn,
    capacitiesLabels: capacities,
});

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`).pipe(catchError(err => of([])));
    }

    public getAllWithCapacitiesLabels0(): Observable<UnicornWithCapacitiesLabels[]> {
        return this.getAll().pipe(
            concatAll(),
            reduce(
                (acc, unicorn) => {
                    acc.unicorns.push(unicorn);
                    acc.uniqueCapacitiesIds = acc.uniqueCapacitiesIds
                        .concat(unicorn.capacities)
                        .filter((value, index, self) => self.indexOf(value) === index);
                    return acc;
                },
                { unicorns: new Array<Unicorn>(), uniqueCapacitiesIds: new Array<number>() },
            ),
            mergeMap(acc => {
                return from(acc.uniqueCapacitiesIds).pipe(
                    mergeMap(capacityId => this.capacitiesService.getOne(capacityId)),
                    toArray(),
                    map(capacities =>
                        [...acc.unicorns].map(unicorn => ({
                            ...unicorn,
                            capacitiesLabels: capacities
                                .filter(({ id }) => unicorn.capacities.includes(id))
                                .map(({ label }) => label),
                        })),
                    ),
                );
            }),
            tap(e => console.log('unicorns with labels', e)),
        );
    }

    public getAllWithCapacitiesLabels(): Observable<UnicornWithCapacitiesLabels[]> {
        const unicorns$ = this.getAll().pipe(share());
        const capacities$ = unicorns$.pipe(
            concatAll(),
            reduce((acc: number[], unicorn: Unicorn) => {
                return acc.concat(unicorn.capacities);
            }, []),
            map(capacities => [...new Set(capacities)]),
            concatAll(),
            mergeMap(id => this.capacitiesService.getOne(id)),
            toArray(),
        );

        return forkJoin([unicorns$, capacities$]).pipe(
            map(([unicorns, capacities]) =>
                unicorns.map(unicorn => ({
                    ...unicorn,
                    capacitiesLabels: capacities
                        .filter(({ id }) => unicorn.capacities.includes(id))
                        .map(({ label }) => label),
                })),
            ),
        );
    }

    public getAllWithCapacitiesLabels2(): Observable<UnicornWithCapacitiesLabels[]> {
        return forkJoin([this.getAll(), this.capacitiesService.getAll()]).pipe(
            map(([unicorns, capacities]) =>
                unicorns.map(u => ({
                    ...u,
                    capacitiesLabels: capacities
                        .filter(({ id }) => u.capacities.includes(id))
                        .map(({ label }) => label),
                })),
            ),
        );
    }
}
