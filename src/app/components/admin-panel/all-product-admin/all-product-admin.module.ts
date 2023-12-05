import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductAdminComponent } from './all-product-admin.component';
import { ItemProductAdminModule } from '../item-product-admin/item-product-admin.module';
import { SelectTypeModule } from '../../select-type/select-type.module';



@NgModule({
  declarations: [
    AllProductAdminComponent
  ],
  imports: [
    CommonModule,
    ItemProductAdminModule,
    SelectTypeModule
  ],
  exports: [
    AllProductAdminComponent
  ]
})
export class AllProductAdminModule { }
