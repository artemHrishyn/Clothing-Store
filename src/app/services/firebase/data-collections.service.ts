import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IGlobalCategory } from '../../interfaces/all-data.interface';
import { Observable, map } from 'rxjs';
import { AllData } from '../../models/all-data.class';

enum ProductCategory {
  shorts = 'shorts',
  sneakers = 'sneakers',
  tshirt = 'tshirt'
};

@Injectable({
  providedIn: 'root'
})
export class DataCollectionsService {
  constructor(
    private dataService: DataService
  ) { }
  
  // Бере дані з сайта переводить їх у масив обєктів по інтерфейсу AllData
  public getData(): Observable<AllData[]> {
    return this.dataService.getData('clothes').pipe(
      map(data => {
        const globalCategory = data as IGlobalCategory;
        
        let allProduct: AllData[] = [];
        const categories = [
          ProductCategory.shorts,
          ProductCategory.sneakers,
          ProductCategory.tshirt
        ];
        
        categories.forEach(category => {
          const products = globalCategory[category];
          
          if (products) {
            Object.keys(products).forEach((key: string) => {
              allProduct.push(products[key]);
            });
          } else {
            console.error(`Нема даних категоріїж ${category}`);
          }
        });
        
        return allProduct;
      })
    );
  }
}
