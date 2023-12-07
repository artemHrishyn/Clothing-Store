import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaComponent } from './personal-area.component';
import { NewProductModule } from '../../components/admin-panel/new-product/new-product.module';
import { AllProductAdminModule } from '../../components/admin-panel/all-product-admin/all-product-admin.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    PersonalAreaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NewProductModule,
    AllProductAdminModule
  ],
  exports: [
    PersonalAreaComponent
  ]
})
export class PersonalAreaModule { }
