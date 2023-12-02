import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyItemModule } from './buy-item/buy-item.module';
import { ProductCartModule } from './product-cart/product-cart.module';
import { ProductInfoModule } from './product-info/product-info.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuyItemModule,
    ProductCartModule,
    ProductInfoModule
  ]
})
export class ProductModule { }
