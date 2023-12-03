import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../../interfaces/all-data.interface';
import { DataCollectionsService } from '../../../services/firebase/data-collections.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'csa-all-product-admin',
  templateUrl: './all-product-admin.component.html',
  styleUrl: './all-product-admin.component.scss'
})
export class AllProductAdminComponent implements OnInit, OnDestroy {
  
  private subscribe: Subscription | null = null
  public images: string[] = [];
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];

  constructor(
    private dataCollections: DataCollectionsService
    ) {}

  ngOnInit(): void {
    this.subscribe = this.dataCollections.getData().subscribe((data: IAllData[]) => {
      if (data) {
        console.log(data);        
        this.itemRezerv = data;
        this.items = this.itemRezerv;
      }
    });
  }

  public show(value: string) {
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brandTitle.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
