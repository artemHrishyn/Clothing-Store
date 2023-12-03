import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart.component';



@NgModule({
  declarations: [
    ProductCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCartComponent
  ]
})
export class ProductCartModule { }
