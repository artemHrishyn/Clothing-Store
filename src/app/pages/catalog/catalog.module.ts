import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductModule } from '../../components/product/product.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CatalogComponent,
    ProductModule
  ]
})
export class CatalogModule { }
