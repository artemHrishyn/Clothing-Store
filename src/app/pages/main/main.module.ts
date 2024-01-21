import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ReviewsModule } from '../../components/reviews/reviews.module';
import { ProductModule } from '../../components/product/product.module';
import { BrandImageModule } from '../../components/brand-image/brand-image.module';
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ReviewsModule,
    BrandImageModule
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
