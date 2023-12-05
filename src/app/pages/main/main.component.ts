import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { GetReviewsService } from '../../services/get-reviews.service';
import { BrandImageService } from '../../services/brand-image.service';
import { DetailsProduct } from '../../models/detailsProduct.class';
import { IReviews } from '../../interfaces/reviews.interface';
import { GoToUrlService } from '../../services/go-to-url.service';
import { AllProductService } from '../../services/product/all-product.service';
import { TopProductService } from '../../services/product/top-product.service';

@Component({
  selector: 'csa-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss',
    './media.scss'
  ],
  providers:[
    AllProductService,
    TopProductService,
    GetReviewsService,
    BrandImageService
  ]
})
export class MainComponent  implements OnInit, OnDestroy {

  private subscribe: Subscription | null = null;
  public productAll: DetailsProduct[] = [];
  public productTop: DetailsProduct[] = [];

  public totalBrands: number = 0;
  public totalProduct: number = 0;

  public imgBrands: string[] = [];
  public reviews: IReviews[] = [];

  constructor(
    private allProduct: AllProductService,
    private topProduct: TopProductService,
    private getReviews: GetReviewsService,
    private brandImage: BrandImageService,
    private goToUrlService : GoToUrlService
    ){}

  ngOnInit(): void {
    this.subscribe = this.getData().subscribe(([allProductData, topProductData, brandImage, reviews]) => {
      
      this.imgBrands = brandImage;
      this.totalBrands = allProductData.length;
      this.totalProduct = allProductData.length;
      this.productAll = allProductData;
      this.productTop = topProductData;
      this.reviews = reviews;
    });
  }
  
  private getData() {
    const allProduct$ = this.allProduct.getAllProduct();
    const topProduct$ = this.topProduct.getTopProduct();
    const brandImage$ = this.brandImage.returnBrandsArray();
    const reviews$ = this.getReviews.getReviews();
  
    return forkJoin([allProduct$, topProduct$, brandImage$, reviews$]);
  }

    
  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
