import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { AllProductService } from './all-product.service';

@Injectable()

export class CatalogProductService {

  constructor(
    private allProduct: AllProductService
  ) { }
  
  // Повертає масив продуктів згідно заданому типу
  public returnCatalogProducts(type: string): Observable<DetailsProduct[]> {
    return this.allProduct.getAllProduct().pipe(
      map((data: DetailsProduct[]) => {
        const value: DetailsProduct[] = [];
        data.forEach((elem: DetailsProduct) =>{
          if(elem.type == type){
            value.push(elem);
          }
        });
        return value;
      })
    );
  }
}
