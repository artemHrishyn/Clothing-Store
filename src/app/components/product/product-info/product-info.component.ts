import { Component, OnInit } from '@angular/core';
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
export class ProductInfoComponent implements OnInit{
  
  private subscribe: Subscription | null = null;

  public imageProduct: string = "";
  public percentageProduct: number = 0;
  public price: number = 0;

  public sizeProduct: { [key: string]: boolean } = {
    '44': false,
    '46': false,
    '48': false,
    '50-52': false,
    '54': false,
    '56-58': false,
  };
  public isSale: boolean = true;
  public counter: number = 1;
  public isBuy: boolean = true;
  public itemProduct: IProductDetails = {} as IProductDetails;

  constructor(
    private buyProductService: BuyProductService,
    private counterPipe: CounterPipe,
    private allProduct: AllProductService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    let idLesson: string = '';
  this.activatedRoute.params.forEach(param => idLesson = param['id-lesson']);
  console.log(idLesson);
  
  this.subscribe = this.allProduct.getAllProduct().subscribe((data: IProductDetails[]) => {
    data.forEach((elem: IProductDetails) => {
      this.activatedRoute.params.forEach(param => idLesson = param['id-lesson']);
      this.getLessonTheme(elem, idLesson);
    });
  });
    
  }

  getLessonTheme(LESSONS: IProductDetails, id: string): void {
    if (LESSONS.title === id) {
      this.itemProduct = LESSONS;
      console.log(this.itemProduct);
    this.imageProduct = this.itemProduct.image[0];

    this.isSale = (this.itemProduct.sale !== 0) ? this.isSale : !this.isSale;
    this.percentageProduct = this.itemProduct.sale / this.itemProduct.price;
    this.sizeProduct = this.itemProduct.size;
    }
  }

  public getSizeKeys(): string[] {
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
}
