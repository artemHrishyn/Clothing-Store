import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProductDetails } from '../../../interfaces/product-details.interface';
import { BuyProductService } from '../../../services/product/buy-product.service';
import { CounterPipe } from '../../../pipe/counter/counter.pipe';
import { ProductBuy } from '../../../models/product-buy.class';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { AllProductService } from '../../../services/product/all-product.service';

@Component({
  selector: 'csa-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent implements OnInit, OnDestroy{
  
  private subscribe: Subscription | null = null;

  public itemProduct: IProductDetails = {} as IProductDetails;
  public imageProduct: string = "";
  public sizeProduct: { [key: string]: boolean } = {
    '44': false,
    '46': false,
    '48': false,
    '50-52': false,
    '54': false,
    '56-58': false,
  };
  public percentageProduct: number = 0;
  public counter: number = 1;
  public isSale: boolean = true;
  public isBuy: boolean = true;
  public ratings: boolean[] = [];
  public isCounter: boolean = false;

  constructor(
    private buyProductService: BuyProductService,
    private counterPipe: CounterPipe,
    private allProduct: AllProductService,
    private activatedRoute: ActivatedRoute
  ) {}


  // Призначення до товару Індекс
  private getLessonTheme(data: IProductDetails, id: string): void {
    if (data.title === id) {
      this.itemProduct = data;

      this.imageProduct = this.itemProduct.image[0];
      this.isSale = (this.itemProduct.sale !== 0) ? this.isSale : !this.isSale;
      this.percentageProduct = this.itemProduct.sale / this.itemProduct.price;
      this.sizeProduct = this.itemProduct.size;
      for (let index = 1; index < 6; index++) {
        this.ratings.push((index <= data.rating)? true: false); 
      }
    }
  }

  ngOnInit(): void {
    let type: string = '';
    this.activatedRoute.params.forEach(param => type = param['type-product']);
    
    this.subscribe = this.allProduct.getAllProduct().subscribe((data: IProductDetails[]) => {
      
      data.forEach((elem: IProductDetails) => {
        this.activatedRoute.params.forEach(param => type = param['type-product']);
        this.getLessonTheme(elem, type);
      });
    });   
  }


  public getSizeKeys(): string[] {
    const keys = Object.keys(this.sizeProduct);
    const value: boolean[] = [];
    keys.forEach(key =>{
      if (this.sizeProduct[key]) {
        value.push(this.sizeProduct[key]);
      }
    });
    this.isCounter = value.length > 0? true: false;
    
    return Object.keys(this.sizeProduct);
  }

  public showMainImage(img: string) {
    this.imageProduct = img;
  }
  
  public productCounter(value: string) {
    this.counter = this.counterPipe.transform(value, this.counter);
  }

  public buyProduct() {

    const item: ProductBuy = new ProductBuy({
      image: this.imageProduct,
      title: this.itemProduct.title,
      price: this.itemProduct.price,
      sale: this.itemProduct.sale,
      counter: this.counter
    });

    this.isBuy = !this.isBuy;
    this.buyProductService.buyProduct(item);
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
