import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UnicornsDispatchers } from './../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from './../store/selectors/unicorns.selectors';

const CURRENT_YEAR = new Date().getFullYear();

@Component({
    selector: 'app-manage-unicorn',
    templateUrl: './manage-unicorn.component.html',
    styleUrls: ['./manage-unicorn.component.scss'],
})
export class ManageUnicornComponent {
    public unicorn$ = this.route.params.pipe(
        switchMap(({ id }) => (id ? this.unicornsSelectors.unicorn$(id) : of(null))),
    );
    public form: FormGroup | null = null;
    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private unicornsSelectors: UnicornsSelectors,
        private unicornsDispatchers: UnicornsDispatchers,
    ) {
        this.unicornsDispatchers.getUnicorns();
        this.unicorn$.subscribe(unicorn => {
            console.log({ unicorn });
            this.form = this.fb.group({
                name: [unicorn?.name || '', [Validators.required]],
                birthyear: [
                    unicorn?.birthyear ?? CURRENT_YEAR - 20,
                    [Validators.required, Validators.min(1800), Validators.max(CURRENT_YEAR)],
                ],
            });
        });
    }

    public save() {}
}
