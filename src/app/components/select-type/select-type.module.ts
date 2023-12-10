import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTypeComponent } from './select-type.component';
import { ReturnTypeService } from '../../services/product/return-type.service';

@NgModule({
  declarations: [
    SelectTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectTypeComponent
  ],
  providers: [
    ReturnTypeService
  ]
})
export class SelectTypeModule { }
