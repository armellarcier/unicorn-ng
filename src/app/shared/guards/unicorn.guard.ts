import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnicornsService } from './../services/unicorns.service';

const CURRENT_YEAR = new Date().getFullYear();

@Injectable({
    providedIn: 'root',
})
export class UnicornGuard implements CanActivate {
    constructor(private unicornService: UnicornsService, private router: Router, private snackBar: MatSnackBar) {}
    canActivate(
        { params: { id: unicornId } }: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> {
        return this.unicornService.getById(unicornId).pipe(
            map(unicorn => !(unicorn && (CURRENT_YEAR - unicorn.birthyear) % 2)),
            tap(access => access || this.snackBar.open('Stop ! Cette licorne a un age pair !')),
            map(
                access =>
                    access ||
                    this.router.createUrlTree(['unicorns', unicornId], {
                        queryParams: { redirectReason: 'ageIsEven' },
                    }),
            ),
        );
    }
}
