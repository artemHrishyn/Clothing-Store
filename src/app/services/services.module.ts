import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToUrlService } from './go-to-url.service';
import { BuyProductService } from './product/buy-product.service';
import { SelectTypeComponent } from '../components/select-type/select-type.component';
import { AllProductService } from './product/all-product.service';
import { FirebaseModule } from './firebase/firebase.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule
  ],
  providers:[
    GoToUrlService,
    BuyProductService,
    SelectTypeComponent,
    AllProductService
  ]
})
export class ServicesModule { }
