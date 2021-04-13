import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const CURRENT_YEAR = new Date().getFullYear();

@Component({
    selector: 'app-manage-unicorn',
    templateUrl: './manage-unicorn.component.html',
    styleUrls: ['./manage-unicorn.component.scss'],
})
export class ManageUnicornComponent {
    public form = this.fb.group({
        name: ['', [Validators.required]],
        birthyear: [CURRENT_YEAR - 20, [Validators.required, Validators.min(1800), Validators.max(CURRENT_YEAR)]],
    });
    constructor(private fb: FormBuilder) {}

    public save() {}
}
