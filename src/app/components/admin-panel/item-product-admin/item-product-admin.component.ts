import { Component, Input, OnInit } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';

@Component({
  selector: 'csa-item-product-admin',
  templateUrl: './item-product-admin.component.html',
  styleUrl: './item-product-admin.component.scss'
})
export class ItemProductAdminComponent implements OnInit {
  @Input() item: IAllData = {} as IAllData;
  public isSale: boolean = false;
  public images: string[] = [];

  constructor(){}

  ngOnInit(): void {
    // Позблавлення не вірних посилань
    this.item.image.filter(elem => elem !== null).forEach(res => {
      this.images.push(res);
    });
    this.isSale = this.item.sale === 0 ? this.isSale : !this.isSale;
  }
}
