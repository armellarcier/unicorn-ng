import { Component } from '@angular/core';
import { Unicorn } from '../shared/models/unicorn.model';
import { UnicornsService } from './../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: Unicorn[] = [];
    public count = 0;
    constructor(unicornsService: UnicornsService) {
        unicornsService.getAll().subscribe(unicorns => {
            this.unicorns = unicorns;
            this.count = this.unicorns.length;
        });
    }
    public removeUnicorn(unicornToRemove: Unicorn) {
        this.unicorns = this.unicorns.filter(({ id }) => id !== unicornToRemove.id);
    }
}
