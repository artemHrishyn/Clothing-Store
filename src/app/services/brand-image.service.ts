import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAllData } from '../interfaces/all-data.interface';
import { MixElementsPipe } from '../pipe/mix-elements/mix-elements.pipe';
import { DataCollectionsService } from './firebase/data-collections.service';

@Injectable({
  providedIn: 'root'
})
export class BrandImageService {

  constructor(
    private DataCollections: DataCollectionsService,
    private mixElements: MixElementsPipe,
  ) { }

  // Повертає масив зображень логотипи товарів
  public returnBrandsArray(): Observable< string[] > {
    return this.DataCollections.getData().pipe(
      map((data: IAllData[]) => {
        let image: string[] = [];
        
        data.forEach((elem: IAllData) => {
          image.push(elem.brandImg);
        });
        
        const randomImage: string[] = this.mixElements.transform(image);
        return this.imageBrandNew(randomImage);
      })
    );
  }
  
  private imageBrandNew(value: string[]): string[]{
    const newArray: string[] = [];
    if (window.innerWidth > 1500) {
      for (let index = 0; index < 7; index++) {
        newArray.push(value[index]);
      }
    }
    else {
      for (let index = 0; index < 5; index++) {
        newArray.push(value[index]);
      }
    }
    return newArray;
  }
}
