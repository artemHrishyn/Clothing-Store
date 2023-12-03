import { Component } from '@angular/core';
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
export class CatalogComponent {

  public valueProduct: IProductDetails = {} as IProductDetails;

  private subscribe: Subscription | null = null;
  // private isShorts: boolean = false;
  // private isSneakers: boolean = false;
  // private isTShirts: boolean = false;

  public showArrayProducts: DetailsProduct[] = [];
  public reservArrayProducts: DetailsProduct[] = [];
  private mainProducts: DetailsProduct[] = [];
  public category: string = "";

  private titleProduct: string = "";
  public isShowProduct: boolean = false;

  constructor(
    private allProduct: AllProductService,
    private dataCollections: DataCollectionsService,
    private catalogProduct: CatalogProductService
  ) {}

  ngOnInit(): void {
    this.allProduct.getAllProduct().subscribe((data: DetailsProduct[]) => {
      this.reservArrayProducts = data
      this.showArrayProducts = this.reservArrayProducts.slice(0, 10);
      this.mainProducts = data;
    });
  }

  changePage(value1: number, value2: number) {
        this.showArrayProducts = this.reservArrayProducts.slice(value1, value2);
  }

  // Вивод товару згідно філтру
  public filterCategory(category: string) {
    
    this.subscribe = this.catalogProduct.returnCatalogProducts(category).subscribe(data =>{
      console.log(data);
      this.category = "";
      let isValue: boolean = false;
      this.showArrayProducts = isValue ? data : this.mainProducts;
      this.isShowProduct = false;
    })
  }

  public handleProductClicked(product: DetailsProduct): void {
    this.dataCollections.getData().subscribe((data: IAllData[]) => {
      const foundItem = data.find(item =>
        item.title === product.title &&
        item.rating === product.rating &&
        item.price === product.price &&
        item.sale === product.sale
        );
      if (foundItem) {
        this.isShowProduct = true;

        const value = new DetailsProduct({
          color:  foundItem.color,
          image:  foundItem.image,
          price:  foundItem.price,
          rating: foundItem.rating,
          sale:   foundItem.sale,
          size:   foundItem.size,
          title:  foundItem.title,
          type:   foundItem.type
        });
        this.valueProduct = value;
        this.titleProduct = value.title;
        this.category = "";
        this.category = value.type + " > " + this.titleProduct;
      }
    });
  }
}
