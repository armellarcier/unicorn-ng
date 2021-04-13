import { AgeFromBirthYearPipe } from './age-from-birth-year.pipe';

describe('AgeFromBirthYearPipe', () => {
    it('create an instance', () => {
        const pipe = new AgeFromBirthYearPipe();
        expect(pipe).toBeTruthy();
    });
});
