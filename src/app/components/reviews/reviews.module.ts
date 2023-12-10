import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { RatingModule } from '../rating/rating.module';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports:[
    ReviewsComponent
  ]
})
export class ReviewsModule { }
