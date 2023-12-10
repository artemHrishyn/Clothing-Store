import { Component, EventEmitter, Output } from '@angular/core';
import { Types } from '../../interfaces/type.enum';
import { IAllData } from '../../interfaces/all-data.interface';
import { ReturnTypeService } from '../../services/product/return-type.service';

@Component({
  selector: 'csa-select-type',
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss'
})
export class SelectTypeComponent {
  
  public types: string[] = Object.values(Types);
  
  constructor(
    private returnType: ReturnTypeService
  ){}
  
  // Вивод товару згідно філтру по типу товару
  public filterCategory(type: string) {
    this.returnType.value = type;
  }
}
