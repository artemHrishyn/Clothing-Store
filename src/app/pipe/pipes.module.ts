import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixElementsModule } from './mix-elements/mix-elements.service';
import { CounterModule } from './counter/counter.module';
import { UniqueValueModule } from './unique-value/unique-value.module';
import { DelateItemModule } from './delate-item/delate-item.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterModule,
    DelateItemModule,
    MixElementsModule,
    UniqueValueModule
  ]
})
export class PipesModule { }