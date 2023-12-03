import { Component, Input } from '@angular/core';
import { IReviews } from '../../interfaces/reviews.interface';

@Component({
  selector: 'csa-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() itemReviews: IReviews = {} as IReviews;
}
