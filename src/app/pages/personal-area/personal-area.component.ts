import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAllData } from '../../interfaces/all-data.interface';
import { GoToUrlService } from '../../services/go-to-url.service';
import { DataCollectionsService } from '../../services/firebase/data-collections.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'csa-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.scss'
})
export class PersonalAreaComponent implements OnInit, OnDestroy {
  
  private subscribe: Subscription | null = null
  public items: IAllData[] = [];
  public itemRezerv: IAllData[] = [];
  public add: string = 'Add';
  public isAdd: boolean = false;

  constructor(
    private dataCollections: DataCollectionsService,
    private goToUrlService: GoToUrlService
  ) {}
  ngOnInit(): void {
    this.subscribe = this.dataCollections.getData().subscribe((data: IAllData[]) => {
      if (data) {
        this.itemRezerv = data;
        this.items = this.itemRezerv;
      }
    });
  }
  
  public addProduct() {
    this.isAdd = !this.isAdd
    this.add = this.isAdd? 'Back' : 'Add';
  }

  public close(value: boolean) {
    this.isAdd = value;
    this.add = this.isAdd? 'Back' : 'Add';
  }

  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}
