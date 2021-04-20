import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unicorn } from './../shared/models/unicorn.model';
import { CartService } from './../shared/services/cart.service';
import { UnicornWithCapacitiesLabels } from './../shared/services/unicorns.service';

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
    @Input() public unicorn: UnicornWithCapacitiesLabels | undefined;
    @Output() private removed = new EventEmitter<void>();
    public unicornWithAge: UnicornWithAge | undefined;
    private currentYear: number = new Date().getFullYear();
    public isFavorite$: Observable<boolean> = of(false);
    constructor(private cartService: CartService) {}

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
        this.removed.emit();
    }
}
