import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCartModule } from '../../components/product/product-cart/product-cart.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogProductService } from '../../services/product/catalog-product.service';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCartModule
  ],
  exports:[
    CatalogComponent,
    CatalogRoutingModule
  ],
  providers:[
    CatalogProductService
  ]
})
export class CatalogModule { }
