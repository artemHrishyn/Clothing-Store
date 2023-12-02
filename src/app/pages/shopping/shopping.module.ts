import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';



@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShoppingComponent
  ]
})
export class ShoppingModule { }
