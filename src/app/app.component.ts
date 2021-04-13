import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'unicorn-ng';
    _count = 0;
    get count() {
        return ++this._count;
    }
}
