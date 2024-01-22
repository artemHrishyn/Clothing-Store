import { Component } from '@angular/core';
import { GoToUrlService } from '../../services/go-to-url.service';

@Component({
  selector: 'csa-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [
    './not-found.component.scss',
    './media.scss',
    'lamp__wrap.scss'
  ]
})
export class NotFoundComponent {
  
  constructor(
    private goToUrlService: GoToUrlService
  ) {}

  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }
}
