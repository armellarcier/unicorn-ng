import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from './../shared/models/unicorn.model';
import { UnicornWithCapacitiesLabels } from './../shared/services/unicorns.service';

export interface UnicornWithAge extends Unicorn {
    age: number;
}

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: UnicornWithCapacitiesLabels | undefined;
    @Output() private removed = new EventEmitter<void>();
    public unicornWithAge: UnicornWithAge | undefined;
    private currentYear: number = new Date().getFullYear();
    constructor() {}

    ngOnInit(): void {
        if (this.unicorn) {
            this.unicornWithAge = { ...this.unicorn, age: this.currentYear - this.unicorn.birthyear };
        }
    }

    public sayHello() {
        alert(
            `Hello, je m'appelle ${this.unicornWithAge?.name} et j'ai ${this.unicornWithAge?.age ?? 0} ${
                this.unicornWithAge?.age ?? 0 > 1 ? 'ans' : 'an'
            };`,
        );
    }

    public remove() {
        this.removed.emit();
    }
}
