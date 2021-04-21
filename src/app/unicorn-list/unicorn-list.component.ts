import { Component } from '@angular/core';
import { Unicorn } from './../shared/models/unicorn.model';
import { UnicornWithCapacitiesLabels } from './../shared/services/unicorns.service';
import { UnicornsDispatchers } from './../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from './../store/selectors/unicorns.selectors';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: UnicornWithCapacitiesLabels[] = [];
    public unicorns$ = this.unicornsSelectors.unicorns$;
    constructor(private unicornsDispatchers: UnicornsDispatchers, private unicornsSelectors: UnicornsSelectors) {
        this.unicornsDispatchers.getUnicorns();
    }
    public removeUnicorn(unicornToRemove: Unicorn) {
        this.unicornsDispatchers.deleteUnicorn(unicornToRemove);
    }
    public trackByUnicorn(u: Unicorn) {
        return u.id;
    }
}
