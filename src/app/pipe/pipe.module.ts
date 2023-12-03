import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixElementsModule } from './mix-elements/mix-elements.service';
import { CounterModule } from './counter/counter.module';
import { DeleteItemModule } from './delete-item/delete-item.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MixElementsModule,
    CounterModule,
    DeleteItemModule
  ]
})
export class PipeModule { }