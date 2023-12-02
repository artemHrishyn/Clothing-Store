import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CatalogComponent
  ]
})
export class CatalogModule { }
