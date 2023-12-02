import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { ContactsModule } from './contacts/contacts.module';
import { MainModule } from './main/main.module';
import { NotFoundModule } from './not-found/not-found.module';
import { PersonalAreaModule } from './personal-area/personal-area.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogModule,
    ContactsModule,
    MainModule,
    NotFoundModule,
    PersonalAreaModule
  ]
})
export class PagesModule { }
