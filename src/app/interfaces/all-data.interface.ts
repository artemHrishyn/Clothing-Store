export interface IGlobalCategory{
    shorts:  { [key: string]:  IAllData };
    sneakers:  { [key: string]:  IAllData };
    tshirt:  { [key: string]:  IAllData };
}

export interface IAllData {
    brandImg: string,
    brandTitle: string,
    color: string[],
    image: string[],
    price: number,
    female: number,
    male: number,
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
