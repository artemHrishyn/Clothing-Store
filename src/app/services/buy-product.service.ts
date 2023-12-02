import { Injectable } from '@angular/core';
import { IProductBuy, IProductBuyNew } from '../interfaces/product-buy.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyProductService {
  private boughtProducts: IProductBuy[] = [];
  private boughtProductsNew: IProductBuyNew[] = [];

  constructor() { }
  buyProduct(product: IProductBuy ) {
    this.boughtProducts.push(product);
  }

  
  getBoughtProducts() {

    this.boughtProductsNew = this.boughtProductsNew.filter((product, index, self) =>
      index === self.findIndex((p) =>
        p.image === product.image &&
        p.title === product.title &&
        p.price === product.price
      )
    );

    return this.boughtProducts;
  }
}
