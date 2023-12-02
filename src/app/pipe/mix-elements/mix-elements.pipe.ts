import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mixElements'
})
export class MixElementsPipe implements PipeTransform {

  transform<T>(value: T[]): T[] {

    const newArray: T[] = [...value]; // Створюємо копію вхідного масиву

    // Перемішуємо елементи рандомно
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }
}
