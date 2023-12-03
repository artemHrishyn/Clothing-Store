import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { BuyItemModule } from '../../components/product/buy-item/buy-item.module';



@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    BuyItemModule
  ],
  exports:[
    ShoppingComponent
  ]
})
export class ShoppingModule { }
