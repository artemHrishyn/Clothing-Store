import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsProduct } from '../../../models/detailsProduct.class';

@Component({
  selector: 'csa-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: [
    './product-cart.component.scss',
    './media.scss'
  ]
})
export class ProductCartComponent implements OnInit {
  @Input() itemProduct: DetailsProduct = {} as DetailsProduct;
  @Output() productClicked: EventEmitter<DetailsProduct> = new EventEmitter<DetailsProduct>();

  public counter: number = 1;
  public image: string = "";
  public price: number = 0;

  public isBuy: boolean = true;

  constructor(
    private productService: ProductService,
    private classProductService: ClassProductService
  ) { }

  ngOnInit() {
    if (this.itemProduct.image && this.itemProduct.image.length > 0) {
      this.image = this.itemProduct.image[0];
    }
    this.price = (this.itemProduct.sale === 0) ? this.itemProduct.price : this.itemProduct.sale;
  }

  public buyProduct(): IProductBuy {

    const item: IProductBuy = this.classProductService.returnClassBuyDetailsProduct(
      this.image,
      this.itemProduct.title,
      this.price,
      this.itemProduct.sale,
      this.counter
    );

    this.productService.buyProduct(item);
    this.isBuy = !this.isBuy;

    return item;
  }

  public createStar(value: number): string {
    let star: string = "";
    for (let index = 0; index < value; index++) {
      star += "★ ";
    }
    return star;
  }

  // методд для того щоб відкрити у каталозі детальню інформацію продукта
  public openProduct(): void {
    this.productClicked.emit(this.itemProduct);
  }
}
