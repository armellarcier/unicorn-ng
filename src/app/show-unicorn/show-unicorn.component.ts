import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UnicornsDispatchers } from './../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from './../store/selectors/unicorns.selectors';

@Component({
    selector: 'app-show-unicorn',
    templateUrl: './show-unicorn.component.html',
    styleUrls: ['./show-unicorn.component.scss'],
})
export class ShowUnicornComponent {
    public unicorn$ = this.route.params.pipe(switchMap(({ id }) => this.unicornsSelectors.unicorn$(+id)));
    constructor(
        private route: ActivatedRoute,
        private unicornsDispatchers: UnicornsDispatchers,
        private unicornsSelectors: UnicornsSelectors,
    ) {
        console.log('go');
        this.route.params.subscribe(({ id }) => {
            console.log(id);
            this.unicornsDispatchers.getUnicorn(+id);
        });
    }
}
