import { Component, EventEmitter, Output } from '@angular/core';
import { Types } from '../../interfaces/type.enum';
import { IAllData } from '../../interfaces/all-data.interface';

@Component({
  selector: 'csa-select-type',
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss'
})
export class SelectTypeComponent {
  
  @Output() onType: EventEmitter<string> = new EventEmitter<string>();
  public types: string[] = Object.values(Types);
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];
  
  // Вивод товару згідно філтру
  public filterCategory(type: string) {
    
    this.onType.emit('type');
    this.items = [];
    if (type != 'All') {
      this.items = this.itemRezerv.filter(elem => (elem.type == type));
    } else {
      this.items = this.itemRezerv;
    }
  }
}
