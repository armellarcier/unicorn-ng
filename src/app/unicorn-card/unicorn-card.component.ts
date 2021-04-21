import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unicorn } from './../shared/models/unicorn.model';
import { CartService } from './../shared/services/cart.service';
import { UnicornsDispatchers } from './../store/dispatchers/unicorns.dispatchers';

export interface UnicornWithAge extends Unicorn {
    age: number;
}

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn | undefined;
    public unicornWithAge: UnicornWithAge | undefined;
    private currentYear: number = new Date().getFullYear();
    public isFavorite$: Observable<boolean> = of(false);
    constructor(private cartService: CartService, private unicornsDispatchers: UnicornsDispatchers) {}

    ngOnInit(): void {
        if (this.unicorn && this.unicorn) {
            this.unicornWithAge = { ...this.unicorn, age: this.currentYear - this.unicorn.birthyear };
            this.isFavorite$ = this.cartService.isInCart(this.unicorn);
        }
    }

    public sayHello() {
        alert(
            `Hello, je m'appelle ${this.unicornWithAge?.name} et j'ai ${this.unicornWithAge?.age ?? 0} ${
                this.unicornWithAge?.age ?? 0 > 1 ? 'ans' : 'an'
            };`,
        );
    }

    public toggleFavorite() {
        if (!this.unicorn) {
            return;
        }
        this.cartService.toggle(this.unicorn);
    }

    public remove() {
        this.unicorn && this.unicornsDispatchers.deleteUnicorn(this.unicorn);
    }
}
