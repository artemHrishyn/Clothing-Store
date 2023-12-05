import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../interfaces/all-data.interface';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { IProductDetails } from '../../interfaces/product-details.interface';
import { AllProductService } from '../../services/product/all-product.service';
import { DataCollectionsService } from '../../services/firebase/data-collections.service';
import { CatalogProductService } from '../../services/product/catalog-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'csa-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit, OnDestroy {
  
  private subscribe: Subscription | null = null;
  
  public valueProduct: IProductDetails = {} as IProductDetails;
  public showArrayProducts: DetailsProduct[] = [];
  public reservArrayProducts: DetailsProduct[] = [];
  private mainProducts: DetailsProduct[] = [];
  private titleProduct: string = "";
  
  public category: string = "";
  public isValue: boolean = false;
  public isShowProduct: boolean = false;

  constructor(
    private allProduct: AllProductService,
    private catalogProduct: CatalogProductService
  ) {}

  ngOnInit(): void {
    this.subscribe = this.allProduct.getAllProduct().subscribe((data: DetailsProduct[]) => {
      this.reservArrayProducts = data
      this.showArrayProducts = this.reservArrayProducts.slice(0, 10);
      this.mainProducts = data;
    });
  }

  public changePage(value1: number, value2: number) {
    this.showArrayProducts = this.reservArrayProducts.slice(value1, value2);
  }

  // Вивод товару згідно філтру
  public filterCategory(category: string) {
    this.isValue = !this.isValue;
    
    this.subscribe = this.catalogProduct.returnCatalogProducts(category).subscribe(data =>{
      this.category = "";
      this.showArrayProducts = this.isValue ? data : this.mainProducts;
      this.isShowProduct = false;
    })
  }

  public handleProductClicked(product: DetailsProduct): void {
    this.allProduct.getAllProduct().subscribe((data: DetailsProduct[]) => {
      const foundItem = data.find(item =>
        item.title === product.title &&
        item.rating === product.rating &&
        item.price === product.price &&
        item.sale === product.sale
      );

      if (foundItem) {
        this.isShowProduct = true;
        this.valueProduct = foundItem;
        this.category = "";
        this.titleProduct = foundItem.title;
        this.category = foundItem.type + " > " + this.titleProduct;
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
