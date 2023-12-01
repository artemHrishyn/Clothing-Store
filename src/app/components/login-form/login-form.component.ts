import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoToUrlService } from '../../services/go-to-url.service';

@Component({
  selector: 'csa-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() isLogin: boolean = false;
  @Output() closeLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() imgLogin: string = '';
  @Output() returnImgLogin: EventEmitter<string> = new EventEmitter<string>();

  public loginData: FormGroup;
  
  
  constructor(private goToUrlService: GoToUrlService) {
    this.loginData = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }
  SignOut() {
    this.goToUrlService.goToUrl('main');
    this.isLogin = !this.isLogin
    this.closeLogin.emit(this.isLogin);
  }
  
   onSubmit(form: FormGroup) {
     if (form.valid) {
       if (form.value.login == 'admin' && form.value.password == 'admin')
       {
         this.goToUrlService.goToUrl('personal-area');
         this.imgLogin = 'https://mahesh.orgfree.com/img/log.png';
         this.closeLogin.emit(this.isLogin);
         this.returnImgLogin.emit(this.imgLogin);
       }
       else {
         form.reset();
       }
    }
  }
}
