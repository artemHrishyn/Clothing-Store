import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataCollectionsService } from '../firebase/data-collections.service';
import { MixElementsPipe } from '../../pipe/mix-elements/mix-elements.pipe';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { IAllData } from '../../interfaces/all-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  constructor(
    private dataCollections: DataCollectionsService,
    private mixElements: MixElementsPipe
  ){}
  
  // Перебирає дані з сайту та створює новий елемент класу DetailsProduct та повертає масив DetailsProduct
  public getAllProduct(): Observable<DetailsProduct[]> {
    return this.dataCollections.getData().pipe(
      map((data: IAllData[]) => {

        const allProduct: DetailsProduct[] = [];

        data.forEach((elem: IAllData) => {
          
          const images: string[] =[];
          elem.image.filter(elem => elem !== null).forEach(res => {
            images.push(res);
          });
          
          const item: DetailsProduct = new DetailsProduct({
            color: elem.color,
            image: images,
            price: elem.price,
            rating: elem.rating,
            sale: elem.sale,
            size: elem.size,
            title: elem.title,
            type: elem.type
          });
          
          allProduct.push(item);
        });
        const mixedBrands: DetailsProduct[] = this.mixElements.transform(allProduct);
        const newValue: DetailsProduct[] = mixedBrands;
        return newValue;
      })
    );
  }
}
