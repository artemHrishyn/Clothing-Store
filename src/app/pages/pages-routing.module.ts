import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CatalogComponent, ContactsComponent,
  MainComponent, NotFoundComponent,
  PersonalAreaComponent, ShoppingComponent
} from './index';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "shopping-list", component: ShoppingComponent },
  { path: "personal-area", component: PersonalAreaComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
