import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCartModule } from '../../components/product/product-cart/product-cart.module';
import { ProductInfoModule } from '../../components/product/product-info/product-info.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogProductService } from '../../services/product/catalog-product.service';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCartModule,
    ProductInfoModule
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
