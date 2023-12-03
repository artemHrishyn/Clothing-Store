import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { AllProductService } from './all-product.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogProductService {

  constructor(
    private allProduct: AllProductService
  ) { }
  
  public returnCatalogProducts(type: string): Observable<DetailsProduct[]> {
    return this.allProduct.getAllProduct().pipe(
      map((data: DetailsProduct[]) => {
        const value: DetailsProduct[] = [];
        data.forEach((elem: DetailsProduct) =>{
          const item: DetailsProduct = new DetailsProduct({
            color: elem.color,
            image: elem.image,
            price: elem.price,
            rating: elem.rating,
            sale: elem.sale,
            size: elem.size,
            title: elem.title,
            type: elem.type
          });
          if(elem.type == type){
            value.push(item);
          }
        });
        return value;
      })
    );
  }
}
