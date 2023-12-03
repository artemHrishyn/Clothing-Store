import { Component, Input } from '@angular/core';
import { IProductDetails } from '../../../interfaces/product-details.interface';
import { BuyProductService } from '../../../services/product/buy-product.service';
import { CounterPipe } from '../../../pipe/counter/counter.pipe';
import { ProductBuy } from '../../../models/product-buy.class';

@Component({
  selector: 'csa-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  
  @Input() itemProduct: IProductDetails = {} as IProductDetails;

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

  constructor(
    private buyProductService: BuyProductService,
    private counterPipe: CounterPipe,
  ) {}
  ngOnInit(): void {
    this.imageProduct = this.itemProduct.image[0];

    this.isSale = (this.itemProduct.sale !== 0) ? this.isSale : !this.isSale;
    this.percentageProduct = this.itemProduct.sale / this.itemProduct.price;
    this.sizeProduct = this.itemProduct.size;
  }

  public getSizeKeys(): string[] {
    return Object.keys(this.sizeProduct);
  }

  public showMainImage(img: string) {
    this.imageProduct = img;
  }

  // Створює масив рядків довжиною n, де кожен елемент масиву є порожнім рядком. Потым пыдставляє ★
  public generateArray = (n: number): string[] => Array(n);

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
