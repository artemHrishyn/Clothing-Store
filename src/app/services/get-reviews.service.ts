import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './firebase/data.service';
import { IReviews } from '../interfaces/reviews.interface';

@Injectable({
  providedIn: 'root'
})
export class GetReviewsService {

  constructor(
    private dataService: DataService
  ) { }
  
  public getReviews(): Observable<IReviews[]> {
    return this.dataService.getData('reviews').pipe(
       map((data: Object) => {
        return  data as IReviews[];
      })
    );
  }
}
