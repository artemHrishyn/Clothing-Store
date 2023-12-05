import { Component, Input } from '@angular/core';

@Component({
  selector: 'csa-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() ratingValue!: number;
  public ratings: boolean[] = [];

  ngOnInit() {
    for (let index = 1; index < 6; index++) {
      this.ratings.push((index <= this.ratingValue)? true: false); 
    }
  }
}
