import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductAdminComponent } from './all-product-admin.component';
import { ItemProductAdminModule } from '../item-product-admin/item-product-admin.module';



@NgModule({
  declarations: [
    AllProductAdminComponent
  ],
  imports: [
    CommonModule,
    ItemProductAdminModule
  ],
  exports: [
    AllProductAdminComponent
  ]
})
export class AllProductAdminModule { }
