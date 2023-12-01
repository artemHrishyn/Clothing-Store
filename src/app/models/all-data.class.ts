import { IAllData, IGlobalCategory } from "../interfaces/all-data.interface";

export class GlobalCategory implements IGlobalCategory {
    public shorts: { [key: string]: IAllData; } = {} ;
    public sneakers: { [key: string]: IAllData; } = {};
    public tshirt: { [key: string]: IAllData; } = {};
    
    constructor(obj: GlobalCategory) {
        Object.assign(this, obj)
    }
}

export class AllData implements IAllData {
    public brandImg: string = '';
    public brandTitle: string = '';
    public color: string[] = [];
    public image: string[] = [];
    public price: number = 0;
    public female: number = 0;
    public male: number = 0;
    public rating: number = 0;
    public sale: number = 0;
    public size: {
        '44': boolean;
        '46': boolean;
        '48': boolean;
        '50-52': boolean;
        '54': boolean;
        '56-58': boolean;} =
        {
        '44': false,
        '46': false,
        '48': false,
        '50-52': false,
        '54': false,
        '56-58': false};
    public title: string = '';
    public type: string = '';
    
    constructor(obj: IAllData) {
        Object.assign(this, obj)
    }
}

