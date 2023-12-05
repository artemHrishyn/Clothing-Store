import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart.component';
import { RatingModule } from '../../rating/rating.module';



@NgModule({
  declarations: [
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    ProductCartComponent
  ]
})
export class ProductCartModule { }
