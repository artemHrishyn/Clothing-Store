import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ReviewsModule } from '../../components/reviews/reviews.module';
import { ProductModule } from '../../components/product/product.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ReviewsModule
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
