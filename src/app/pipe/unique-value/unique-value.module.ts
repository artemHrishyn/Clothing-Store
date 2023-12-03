import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueValuePipe } from './unique-value.pipe';



@NgModule({
  declarations: [
    UniqueValuePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [UniqueValuePipe],
  providers: [ UniqueValuePipe ]
})
export class UniqueValueModule { }
