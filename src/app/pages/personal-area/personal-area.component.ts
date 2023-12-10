import { Component } from '@angular/core';
import { GoToUrlService } from '../../services/go-to-url.service';

@Component({
  selector: 'csa-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.scss'
})
export class PersonalAreaComponent {
  
  public add: string = 'Add';
  public isAdd: boolean = false;
  public gmail: string = 'genser.artem@gmail.com';

  constructor(
    private goToUrlService: GoToUrlService
  ) {}
  
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
}
