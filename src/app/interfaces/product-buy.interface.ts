export interface IProductBuy extends IProductBuyNew{
    image: string,
    title: string,
    price: number,
    sale: number
    counter: number
  }
  
  export interface IProductBuyNew {
    image: string,
    title: string,
    price: number,
    counter: number
  }