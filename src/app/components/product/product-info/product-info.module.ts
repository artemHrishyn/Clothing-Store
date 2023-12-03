import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';



@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductInfoComponent
  ]
})
export class ProductInfoModule { }
