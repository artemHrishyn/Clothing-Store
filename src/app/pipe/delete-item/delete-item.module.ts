import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemPipe } from './delete-item.pipe';



@NgModule({
  declarations: [
    DeleteItemPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeleteItemPipe
  ],
  providers: [
    DeleteItemPipe
  ]
})
export class DeleteItemModule { }
