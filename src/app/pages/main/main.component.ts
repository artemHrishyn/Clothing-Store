import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AllProductService } from '../../services/all-product.service';
import { TopProductService } from '../../services/top-product.service';
import { GetReviewsService } from '../../services/get-reviews.service';
import { BrandImageService } from '../../services/brand-image.service';

@Component({
  selector: 'csa-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers:[
    AllProductService,
    TopProductService,
    GetReviewsService,
    BrandImageService
  ]
})
export class MainComponent  implements OnInit, OnDestroy {
  private subscribe: Subscription | null = null;

  constructor(
    private allProduct: AllProductService,
    private topProduct: TopProductService,
    private getReviews: GetReviewsService,
    private brandImage: BrandImageService
    ){}

    ngOnInit(): void {
      this.subscribe = this.getData().subscribe(([allProductData, topProductData, reviews, brandImage]) => {
        console.log('All product: ', allProductData);
        console.log('Top product: ', topProductData);
        console.log('Reviews', reviews);
        console.log('Brand Image: ', brandImage);
      });
    }
    
    private getData() {
      const allProduct$ = this.allProduct.getAllProduct();
      const topProduct$ = this.topProduct.getTopProduct();
      const reviews$ = this.getReviews.getReviews();
      const brandImage$ = this.brandImage.returnBrandsArray();
    
      return forkJoin([allProduct$, topProduct$, reviews$, brandImage$]);
    }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
