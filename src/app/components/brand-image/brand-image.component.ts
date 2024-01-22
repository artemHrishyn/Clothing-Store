import { Component, HostListener, OnInit } from '@angular/core';
import { BrandImageService } from '../../services/brand-image.service';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'csa-brand-image',
  templateUrl: './brand-image.component.html',
  styleUrl: './brand-image.component.scss',
  providers:[
    BrandImageService
  ]
})
export class BrandImageComponent implements OnInit {
  
  private subscribe: Subscription | null = null;
  public image:string = '';
  public imgBrands: string[] = [];
  
  constructor(
    private brandImage: BrandImageService){
  }
  ngOnInit(): void {
    
    this.subscribe = this.getData().subscribe(([brandImage]) => {
      
    this.imgBrands = brandImage;
    this.chengeImageBrand();
    });
  }

  public getData(){
    const brandImage$ = this.brandImage.returnBrandsArray();
    return forkJoin([ brandImage$]);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.chengeImageBrand();
  }
  
  private chengeImageBrand(){
    const newArray: string[] = [];
    if (window.innerWidth > 1500) {
      for (let index = 0; index < 7; index++) {
        newArray.push(this.imgBrands[index]);
      }
    }
    else {
      for (let index = 0; index < 5; index++) {
        newArray.push(this.imgBrands[index]);
      }
    }

    this.imgBrands = newArray;
  }

  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
