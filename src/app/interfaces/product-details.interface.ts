export interface IProductDetails{
    color: string[],
    image: string[],
    price: number,
    rating: number,
    sale: number,
    size: {
        '44': boolean,
        '46': boolean,
        '48': boolean,
        '50-52': boolean,
        '54': boolean,
        '56-58': boolean
    },
    title: string,
    type: string
  }