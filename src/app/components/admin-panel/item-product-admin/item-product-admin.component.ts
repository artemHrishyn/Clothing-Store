import { Component, Input } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';

@Component({
  selector: 'csa-item-product-admin',
  templateUrl: './item-product-admin.component.html',
  styleUrl: './item-product-admin.component.scss'
})
export class ItemProductAdminComponent {
  @Input() item: IAllData = {} as IAllData;
  public isSale: boolean = false;

  constructor(){
    this.isSale = this.item.sale === 0 ? this.isSale : !this.isSale;
  }
}
