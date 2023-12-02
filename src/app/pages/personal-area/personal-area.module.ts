import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaComponent } from './personal-area.component';



@NgModule({
  declarations: [
    PersonalAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalAreaComponent
  ]
})
export class PersonalAreaModule { }
