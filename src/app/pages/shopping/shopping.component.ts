import { Component } from '@angular/core';
import { GoToUrlService } from '../../services/go-to-url.service';
import { ProductBuyNew } from '../../models/product-buy.class';
import { BuyProductService } from '../../services/product/buy-product.service';
import { IProductBuy, IProductBuyNew } from '../../interfaces/product-buy.interface';
import { DeleteItemPipe } from '../../pipe/delate-item/delete-item.pipe';

interface MyObject {
  title: string;
  value: number;
}

@Component({
  selector: 'csa-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: [
    './shopping.component.scss',
    './media.scss'
  ]
})
export class ShoppingComponent {
  
  public boughtProductsNew: IProductBuyNew[] = [];
  public isEmpty = true;
  public sum: number = 0;
  public totalSum: number = 0;
  public totalSumArray: MyObject[] = [];

  constructor(
    private goToUrlService: GoToUrlService,
    private buyProduct: BuyProductService,
    private deleteItemPipe: DeleteItemPipe
  ) {

    this.buyProduct.getBoughtProducts().forEach(elem => {
      const price = (elem.sale == 0)? elem.price : elem.sale
      const item: ProductBuyNew = new ProductBuyNew({
        image: elem.image,
        title: elem.title,
        price: price,
        counter: elem.counter,
      });
      this.boughtProductsNew.push(item);
    });

    this.isEmpty = (this.boughtProductsNew.length != 0) ? false : true;
  }

  public backMainPage(value: string) {
    this.goToUrlService.goToUrl(value);
  }

  public Delate(value: IProductBuyNew) {
    this.boughtProductsNew = this.deleteItemPipe.transform<IProductBuyNew>(value, this.boughtProductsNew);

    if (this.boughtProductsNew.length === 0) {
      this.isEmpty = true;
    }
    this.totalSum -= value.price;
  }

  public onCounterReceived(event: MyObject): void {

    const { title, value } = event;
    const previousSumItem = this.sum;
    const currentSumItem = value;

    if (previousSumItem > currentSumItem) {
      this.sum -= previousSumItem - currentSumItem;
    } else if (previousSumItem < currentSumItem) {
      this.sum += currentSumItem - previousSumItem;
    }

    this.totalSumArray.push({ title: title, value: this.sum });

    const uniqueProductBuy = this.totalSumArray.reduceRight((accumulator: MyObject[], currentObject: MyObject) => {
      const foundIndex = accumulator.findIndex(obj => obj.title === currentObject.title);
      if (foundIndex === -1) {
        accumulator.unshift(currentObject);
      }
      return accumulator;
    }, []);

    let sum: number = 0;
    uniqueProductBuy.forEach(elem => {
      sum += elem.value;
    });
    this.totalSum = sum ;
  }
}
