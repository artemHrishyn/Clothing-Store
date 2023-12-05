import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';
import { DataCollectionsService } from '../../../services/firebase/data-collections.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'csa-all-product-admin',
  templateUrl: './all-product-admin.component.html',
  styleUrl: './all-product-admin.component.scss'
})
export class AllProductAdminComponent implements OnInit, AfterContentChecked, OnDestroy {
  
  private subscribe: Subscription | null = null;
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];
  public type: string = '';

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

  // Пошук item по назви Бренду
  public searchBrandTitle(value: string) {
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brandTitle.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }

  ngAfterContentChecked(): void {
    console.log(this.type);
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
