import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixElementsModule } from './mix-elements/mix-elements.service';
import { CounterModule } from './counter/counter.module';
import { UniqueValueModule } from './unique-value/unique-value.module';
import { DeleteItemModule } from './delete-item/delete-item.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MixElementsModule,
    CounterModule,
    UniqueValueModule
    DeleteItemModule
  ]
})
export class PipeModule { }