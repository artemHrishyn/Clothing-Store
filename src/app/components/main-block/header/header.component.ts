import { Component } from '@angular/core';
import { GoToUrlService } from '../../../services/go-to-url.service';

@Component({
  selector: 'csa-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss',
  ]
})
export class HeaderComponent {
  public isShowMenu: boolean = false;
  public isLogin: boolean = false;
  public userImg: string = "assets/image/icon/user.svg";

  constructor(
    private goToUrlService: GoToUrlService
  ) {}
  
  public showMiniMenu():void {
    this.isShowMenu = !this.isShowMenu;
  }

  public loginShow(): void {
    if (this.userImg === 'assets/image/icon/user.svg')
    {
      this.isLogin = !this.isLogin;
    }
    else
    {
      this.goToUrlService.goToUrl('personal-area');
    }
  }

  public goToUrl(value: string) {
    this.isLogin = false;
    this.goToUrlService.goToUrl(value);
  }

  public returnLogin() {
    this.isLogin = false;
  }
  public returnImage(image: string) {
    this.userImg = image;
  }
}
