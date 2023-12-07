import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { BuyItemModule } from '../../components/product/buy-item/buy-item.module';
import { ShoppingRoutingModule } from './shopping-routing.module';



@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    BuyItemModule,
    ShoppingRoutingModule
  ],
  exports:[
    ShoppingComponent
  ]
})
export class ShoppingModule { }
