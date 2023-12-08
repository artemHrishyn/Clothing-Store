import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnTypeService {
  
  private type: string = '';
  constructor() { }
  
  public get value() : string {
    return this.type;
  }
  
  
  public set value(value : string) {
    this.type = value;
  }
  
}
