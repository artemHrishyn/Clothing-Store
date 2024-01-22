import { Component, HostListener, OnInit } from '@angular/core';
import { GoToUrlService } from '../../../services/go-to-url.service';

@Component({
  selector: 'csa-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss',
  ]
})
export class HeaderComponent implements OnInit {
  public isShowMenu: boolean = false;
  public isMiniMenu: boolean = false;
  public isLogin: boolean = false;
  public userImg: string = "assets/image/icon/user.svg";

  constructor(
    private goToUrlService: GoToUrlService
  ) {}
  ngOnInit(): void {
    if(window.innerWidth > 768){
      this.isShowMenu = true;
      this.isMiniMenu = false;
    }
    else{
      this.isShowMenu = false;
      this.isMiniMenu = true;
    }
  }
  
  public showMiniMenu():void {
    this.isShowMenu = !this.isShowMenu;
    console.log(this.isShowMenu);
    
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if(window.innerWidth > 768){
      this.isShowMenu = true;
      this.isMiniMenu = false;
    }
    else{
      this.isShowMenu = false;
      this.isMiniMenu = true;
    }
  }
}
