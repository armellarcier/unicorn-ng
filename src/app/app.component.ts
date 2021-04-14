import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, finalize, map, reduce, tap } from 'rxjs/operators';

const l = (n: String, s: boolean = true) => (...args: any[]) =>
    console.log(
        n,
        args.map(v => (s ? JSON.stringify(v) : v)),
    );
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'unicorn-ng';
    constructor() {
        const users = [
            { id: 0, name: 'a', job: { name: 'dev' } },
            { id: 1, name: 'b', job: { name: 'astronaute' } },
            { id: 2, name: 'c' },
        ];
        let loading = false;
        const pipe = from(users)
            .pipe(
                (o: Observable<unknown>, ...args): Observable<unknown> => {
                    return new Observable(subscriber => {
                        o.subscribe({
                            next: (v: unknown) => {
                                if (typeof v === 'object' && v && v.hasOwnProperty('job')) {
                                    subscriber.next(v);
                                }
                            },
                            error: subscriber.error,
                            complete: () => subscriber.complete(),
                        });
                    });
                },
                tap(() => (loading = true)),
                tap(l('tap 1')),
                filter(e => e.job?.name),
                map(e => ({ ...e, age: 0 })),
                reduce((acc: object[], e: object) => acc.concat(e), []),
                tap(l('tap 2', false)),
                finalize(() => (loading = false)),
            )
            .subscribe(l('next'));
    }
}
