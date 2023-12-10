import { Component, Input, OnInit } from '@angular/core';
import { DetailsProduct } from '../../../models/detailsProduct.class';
import { ProductBuy } from '../../../models/product-buy.class';
import { BuyProductService } from '../../../services/product/buy-product.service';

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
  @Input() buyTitle: string = 'Замовити';
  
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

  public buyProduct() {

    const item: ProductBuy = new ProductBuy({
      image: this.image,
      title: this.itemProduct.title,
      price: this.itemProduct.price,
      sale: this.itemProduct.sale,
      counter: 1
    });

    this.isBuy = !this.isBuy;
    this.buyProductService.buyProduct(item);
  }

  public createStar(value: number): string {
    let star: string = "";
    for (let index = 0; index < value; index++) {
      star += "★ ";
    }
    return star;
  }
}
