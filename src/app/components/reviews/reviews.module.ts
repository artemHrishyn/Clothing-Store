import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReviewsComponent
  ]
})
export class ReviewsModule { }
