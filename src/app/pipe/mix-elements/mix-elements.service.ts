import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixElementsPipe } from './mix-elements.pipe';

@NgModule({
  declarations: [
    MixElementsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [MixElementsPipe],
  providers: [ MixElementsPipe ]
})

export class MixElementsModule { }