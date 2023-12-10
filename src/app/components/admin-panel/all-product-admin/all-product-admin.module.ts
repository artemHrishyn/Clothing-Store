import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductAdminComponent } from './all-product-admin.component';
import { ItemProductAdminModule } from '../item-product-admin/item-product-admin.module';
import { SelectTypeModule } from '../../select-type/select-type.module';
import { ReturnTypeService } from '../../../services/product/return-type.service';



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
  ],
  providers: [
    ReturnTypeService
  ]
})
export class AllProductAdminModule { }
