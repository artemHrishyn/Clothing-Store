import { Injectable } from '@angular/core';

@Injectable()

export class ReturnTypeService {
  private type: string = '';
  
  public get value() : string {
    return this.type;
  }
  
  public set value(value : string) {
    this.type = value;
  }
  
}
