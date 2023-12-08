import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MainComponent, NotFoundComponent,
} from './index';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  { path: '',     loadChildren: () => import("./catalog/catalog.module").then(mod => mod.CatalogModule) },
  { path: '',     loadChildren: () => import("./contacts/contacts.module").then(mod => mod.ContactsModule) },
  { path: '',     loadChildren: () => import("./shopping/shopping.module").then(mod => mod.ShoppingModule) },
  { path: '',     loadChildren: () => import("./personal-area/personal-area.module").then(mod => mod.PersonalAreaModule) },
  { path: "**",   component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
