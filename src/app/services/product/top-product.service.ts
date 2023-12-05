import { Injectable } from '@angular/core';
import { AllProductService } from './all-product.service';
import { Observable, map } from 'rxjs';
import { DetailsProduct } from '../../models/detailsProduct.class';

@Injectable({
  providedIn: 'root'
})
export class TopProductService {

  constructor(
    private allProduct: AllProductService,
  ) { }

  public getTopProduct(): Observable<DetailsProduct[]> {
    return this.allProduct.getAllProduct().pipe(
      map((data: DetailsProduct[]) => {
        const allProduct: DetailsProduct[] = [];
        data.forEach((elem: DetailsProduct) => {
          if (elem.rating == 5) {
            allProduct.push(elem);
          }
        });
        return allProduct;
      })
    );
  }
}
