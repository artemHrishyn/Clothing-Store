import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueValue'
})
export class UniqueValuePipe implements PipeTransform {

  transform<T>(value: T[]): T[] {
    const newValue: T[] = Array.from(new Set(value));
    return newValue;
  }

}
