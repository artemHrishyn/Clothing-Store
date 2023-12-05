import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToUrlService } from './go-to-url.service';
import { BuyProductService } from './product/buy-product.service';
import { SelectTypeComponent } from '../components/select-type/select-type.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    GoToUrlService,
    BuyProductService,
    SelectTypeComponent
  ]
})
export class ServicesModule { }
