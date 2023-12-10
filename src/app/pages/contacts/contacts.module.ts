import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactsComponent,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
