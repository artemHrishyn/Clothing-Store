import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { RatingModule } from '../../rating/rating.module';



@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    ProductInfoComponent
  ]
})
export class ProductInfoModule { }
