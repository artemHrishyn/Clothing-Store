import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {
  transform(value: string, countValue: number): number {
    switch (value) {
      case "minus":
        (countValue > 1) ? countValue-- : 1;
        break;

      case "plus":
        countValue++;
        break;

      default:
        countValue = 1;
        break;
    }
    return countValue;
  }
}
