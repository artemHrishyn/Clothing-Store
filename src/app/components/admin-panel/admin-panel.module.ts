import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductAdminModule } from './all-product-admin/all-product-admin.module';
import { ItemProductAdminModule } from './item-product-admin/item-product-admin.module';
import { NewProductModule } from './new-product/new-product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllProductAdminModule,
    ItemProductAdminModule,
    NewProductModule
  ]
})
export class AdminPanelModule { }
