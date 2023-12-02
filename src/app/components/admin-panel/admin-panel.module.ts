import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductAdminModule } from './all-product-admin/all-product-admin.module';
import { ItemProductAdminModule } from './item-product-admin/item-product-admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllProductAdminModule,
    ItemProductAdminModule
  ]
})
export class AdminPanelModule { }
