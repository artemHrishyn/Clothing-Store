import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';
import { DataCollectionsService } from '../../../services/firebase/data-collections.service';
import { Subscription } from 'rxjs';
import { Types } from '../../../interfaces/type.enum';

@Component({
  selector: 'csa-all-product-admin',
  templateUrl: './all-product-admin.component.html',
  styleUrl: './all-product-admin.component.scss'
})
export class AllProductAdminComponent implements OnInit, OnDestroy {
  
  private subscribe: Subscription | null = null;
  public types: string[] = Object.values(Types);
  public images: string[] = [];
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];

  constructor(
    private dataCollections: DataCollectionsService
    ) {}

  ngOnInit(): void {
    this.subscribe = this.dataCollections.getData().subscribe((data: IAllData[]) => {
      if (data) {      
        this.itemRezerv = data;
        this.items = this.itemRezerv;
      }
    });
  }

  private search(value: string){
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brandTitle.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }

  // Пошук item по назви Бренду
  public searchBrandTitle(value: string) {
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brandTitle.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }
  
  // Вивод товару згідно філтру
  public filterCategory(type: string) {
    console.log(this.itemRezerv[0].type);
    this.items = [];
    if (type != 'All') {
      this.items = this.itemRezerv.filter(elem => (elem.type == type));
    } else {
      this.items = this.itemRezerv;
    }
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
