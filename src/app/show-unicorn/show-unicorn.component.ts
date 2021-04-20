import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UnicornsService } from './../shared/services/unicorns.service';

@Component({
    selector: 'app-show-unicorn',
    templateUrl: './show-unicorn.component.html',
    styleUrls: ['./show-unicorn.component.scss'],
})
export class ShowUnicornComponent {
    public unicorn$ = this.route.params.pipe(switchMap(({ id }) => this.unicornService.getById(id)));
    constructor(private route: ActivatedRoute, private unicornService: UnicornsService) {}
}
