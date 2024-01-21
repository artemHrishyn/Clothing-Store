import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandImageComponent } from './brand-image.component';



@NgModule({
  declarations: [
    BrandImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BrandImageComponent
  ]
})
export class BrandImageModule { }
