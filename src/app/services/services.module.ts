import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToUrlService } from './go-to-url.service';
import { BuyProductService } from './product/buy-product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    GoToUrlService,
    BuyProductService
  ]
})
export class ServicesModule { }
