import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteItem'
})
export class DeleteItemPipe implements PipeTransform {

  transform<T>(value: T, data: T[]): T[] {
    return data.filter((element) => element !== value);
  }
}
