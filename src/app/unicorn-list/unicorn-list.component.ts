import { Component } from '@angular/core';
import { Unicorn } from './../shared/models/unicorn.model';
import { UnicornsDispatchers } from './../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from './../store/selectors/unicorns.selectors';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns$ = this.unicornsSelectors.unicorns$;
    constructor(private unicornsDispatchers: UnicornsDispatchers, private unicornsSelectors: UnicornsSelectors) {
        this.unicornsDispatchers.getUnicorns();
    }
    public trackByUnicorn(u: Unicorn) {
        return u.id;
    }
}
