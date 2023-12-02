import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixElementsModule } from './mix-elements/mix-elements.service';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MixElementsModule,
    CounterModule
  ]
})
export class PipeModule { }