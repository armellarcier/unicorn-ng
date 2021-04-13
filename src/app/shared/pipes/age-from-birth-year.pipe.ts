import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ageFromBirthYear',
})
export class AgeFromBirthYearPipe implements PipeTransform {
    transform(birthyear: number): string {
        const age = new Date().getFullYear() - birthyear;
        return age > 60 ? 'vieux' : `${age}\u00a0${age > 1 ? 'ans' : 'an'}`;
    }
}
