import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { ContactsModule } from './contacts/contacts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogModule,
    ContactsModule
  ]
})
export class PagesModule { }
