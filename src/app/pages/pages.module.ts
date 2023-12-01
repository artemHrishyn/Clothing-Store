import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { ContactsModule } from './contacts/contacts.module';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogModule,
    ContactsModule,
    MainModule
  ]
})
export class PagesModule { }
