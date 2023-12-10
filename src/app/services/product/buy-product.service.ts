import { Injectable } from '@angular/core';
import { IProductBuy, IProductBuyNew } from '../../interfaces/product-buy.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyProductService {
  private boughtProducts: IProductBuy[] = [];
  
  //  створює масив покупок
  public buyProduct(product: IProductBuy ) {
    this.boughtProducts.push(product);
  }
  
  // Повертає тільки ти дані якщо у елементу масива збигаются дані внутрі елемента
  public getBoughtProducts(): IProductBuy[] {
    this.boughtProducts = this.boughtProducts.filter((product, index, self) =>
      index === self.findIndex((p) =>
        p.image === product.image &&
        p.title === product.title &&
        p.price === product.price
      )
    );
    return this.boughtProducts;
  }
}
