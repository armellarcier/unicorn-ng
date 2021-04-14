import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from './../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private readonly _cart$ = new BehaviorSubject<Unicorn[]>([]);
    public readonly cart$ = this._cart$.asObservable();
    constructor() {}

    add(unicorn: Unicorn) {
        this._cart$.next([...this._cart$.getValue(), unicorn]);
    }

    remove(unicorn: Unicorn) {
        this._cart$.next(this._cart$.getValue().filter(({ id }) => id !== unicorn.id));
    }

    has(unicorn: Unicorn): boolean {
        return this._cart$.getValue().some(({ id }) => id === unicorn.id);
    }

    public isInCart(unicorn: Unicorn): Observable<boolean> {
        return this.cart$.pipe(map(cart => cart.some(({ id }) => id === unicorn.id)));
    }

    toggle(unicorn: Unicorn) {
        if (this.has(unicorn)) {
            this.remove(unicorn);
        } else {
            this.add(unicorn);
        }
    }
}
