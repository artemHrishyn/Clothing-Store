import { IProductBuy, IProductBuyNew } from "../interfaces/product-buy.interface";

export class ProductBuy implements IProductBuy{
    public image: string = "";
    public title: string = "";
    public price: number = 0;
    public sale: number = 0;
    public counter: number = 1;
    
    constructor(obj: IProductBuy) {
        Object.assign(this, obj)
    }
  }
  export class ProductBuyNew implements IProductBuyNew{
    public image: string = "";
    public title: string = "";
    public price: number = 0;
    public counter: number = 1;

    constructor(obj: IProductBuyNew) {
        Object.assign(this, obj)
    }
}