import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsProduct } from '../../../models/detailsProduct.class';
import { IProductBuy } from '../../../interfaces/product-buy.interface';
import { BuyProductService } from '../../../services/buy-product.service';
import { ProductBuy } from '../../../models/product-buy.class';

@Component({
  selector: 'csa-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: [
    './product-cart.component.scss',
    './media.scss'
  ],
  providers:[
    BuyProductService
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
    private buyProductService: BuyProductService
  ) { }

  ngOnInit() {
    if (this.itemProduct.image && this.itemProduct.image.length > 0) {
      this.image = this.itemProduct.image[0];
    }
    this.price = (this.itemProduct.sale === 0) ? this.itemProduct.price : this.itemProduct.sale;
  }

  public buyProduct(): IProductBuy {

    const item = new ProductBuy({
      image: this.image,
      title: this.itemProduct.title,
      price: this.price,
      sale: this.itemProduct.sale,
      counter: this.counter
    });

    this.buyProductService.buyProduct(item);
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
