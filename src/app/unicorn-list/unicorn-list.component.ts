import { Component } from '@angular/core';
import { Unicorn } from '../shared/models/unicorn.model';
import { UnicornsService, UnicornWithCapacitiesLabels } from './../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: UnicornWithCapacitiesLabels[] = [];
    public count = 0;
    constructor(unicornsService: UnicornsService) {
        unicornsService.getAllWithCapacitiesLabels().subscribe(unicorns => {
            this.unicorns = unicorns;
            this.count = this.unicorns.length;
        });
    }
    public removeUnicorn(unicornToRemove: Unicorn) {
        this.unicorns = this.unicorns.filter(({ id }) => id !== unicornToRemove.id);
    }
}
