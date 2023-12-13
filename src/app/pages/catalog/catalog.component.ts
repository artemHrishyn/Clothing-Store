import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { AllProductService } from '../../services/product/all-product.service';
import { CatalogProductService } from '../../services/product/catalog-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'csa-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit, OnDestroy {
  
  private subscribe: Subscription | null = null;

  public showArrayProducts: DetailsProduct[] = [];
  public reservArrayProducts: DetailsProduct[] = [];
  private mainProducts: DetailsProduct[] = [];
  
  public category: string = 'All';
  public categoryNow: string = '';
  public buyTitle: string = 'Детально';

  constructor(
    private allProduct: AllProductService,
    private catalogProduct: CatalogProductService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.subscribe = this.allProduct.getAllProduct().subscribe((data: DetailsProduct[]) => {
      this.reservArrayProducts = data
      this.showArrayProducts = this.reservArrayProducts.slice(0, 10);
      this.mainProducts = data;
    });
  }
  
  // Детальна інформація продукта
  public showDetailsTheme(type: DetailsProduct) {
    this.router.navigate(['catalog', type.title])
  }

  public changePage(value1: number, value2: number) {
    this.showArrayProducts = this.reservArrayProducts.slice(value1, value2);
  }

  // Вивод товару згідно філтру
  public filterCategory(category: string) {
    
    if(this.categoryNow !== category)
    {
      this.subscribe = this.catalogProduct.returnCatalogProducts(category).subscribe(data =>{
        this.category = category;
        this.showArrayProducts =  data;
        this.categoryNow = category;
      })
    }
    else{
      this.showArrayProducts = this.mainProducts;
        this.categoryNow = '';
        this.category = 'All';
    }
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
