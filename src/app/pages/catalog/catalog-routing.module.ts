import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductInfoComponent } from '../../components/product/product-info/product-info.component';

const routes: Routes = [
  { path: 'catalog',             component: CatalogComponent },
  { path: 'catalog/:id-product',  component: ProductInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }