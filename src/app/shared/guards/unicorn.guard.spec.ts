import { TestBed } from '@angular/core/testing';
import { UnicornGuard } from './unicorn.guard';

describe('UnicornGuard', () => {
    let guard: UnicornGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(UnicornGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
