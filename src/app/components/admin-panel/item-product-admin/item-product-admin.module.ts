import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProductAdminComponent } from './item-product-admin.component';
import { RatingModule } from '../../rating/rating.module';



@NgModule({
  declarations: [
    ItemProductAdminComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    ItemProductAdminComponent
  ]
})
export class ItemProductAdminModule { }
