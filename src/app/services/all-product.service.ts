import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DetailsProduct } from '../models/detailsProduct.class';
import { IAllData } from '../interfaces/all-data.interface';
import { DataCollectionsService } from './firebase/data-collections.service';
import { MixElementsPipe } from '../pipe/mix-elements/mix-elements.pipe';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  constructor(
    private dataCollections: DataCollectionsService,
    private mixElements: MixElementsPipe
  ){}
  
  public getAllProduct(): Observable<DetailsProduct[]> {
    return this.dataCollections.getData().pipe(
      map((data: IAllData[]) => {

        const allProduct: DetailsProduct[] = [];

        data.forEach((elem: IAllData) => {
          allProduct.push(elem);
        });
        const mixedBrands: DetailsProduct[] = this.mixElements.transform(allProduct);
        const newValue: DetailsProduct[] = mixedBrands;
        return newValue;
      })
    );
  }
}
