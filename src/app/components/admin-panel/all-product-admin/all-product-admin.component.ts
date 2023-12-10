import { AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';
import { DataCollectionsService } from '../../../services/firebase/data-collections.service';
import { Subscription } from 'rxjs';
import { ReturnTypeService } from '../../../services/product/return-type.service';

@Component({
  selector: 'csa-all-product-admin',
  templateUrl: './all-product-admin.component.html',
  styleUrl: './all-product-admin.component.scss'
})
export class AllProductAdminComponent implements OnInit, AfterContentChecked, OnDestroy {
  
  private subscribe: Subscription | null = null;
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];
  constructor(
    private dataCollections: DataCollectionsService,
    private returnType: ReturnTypeService
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
   
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brandTitle.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }

  ngAfterContentChecked(): void {
    this.search();
  }

  public search(){
    if(this.returnType.value){
      if (this.returnType.value != 'All') {
        this.items = this.itemRezerv.filter(elem => (elem.type == this.returnType.value));
      } else {
        this.items = this.itemRezerv;
        
      }
    }
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
