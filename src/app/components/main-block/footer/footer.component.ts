import { Component } from '@angular/core';
import { GoToUrlService } from '../../../services/go-to-url.service';

@Component({
  selector: 'csa-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './media.scss'
  ]
})
export class FooterComponent {
  
  constructor(
    private goToUrlService: GoToUrlService
  ){}

  list = {
    info: [
      "Україна м. Одеса",
      "Про нас",
      "Повернення та відшкодування"
    ],
    help: [
      "Мій аккаунт",
      "Безкоштовна доставка до додому",
      "Статус замовлення"
    ]
  }

  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }
}
