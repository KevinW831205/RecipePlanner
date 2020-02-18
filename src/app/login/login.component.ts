import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupInfo } from '../models/SignupInfo';
import { AuthService } from '../shared/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  account: SignupInfo = {
    username: null,
    password: null
  };
  invalidLogin: boolean = false;
  disableLogin: boolean = false;

  @Output() submitLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }


  login() {
    this.authService.login(this.account).subscribe(
      res => {
        this.authService.userSubject.next(res);
        this.invalidLogin = false;
        this.disableLogin = true;
        localStorage.setItem('user', JSON.stringify(res.username))
        this.submitLogin.emit(true);
        this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') || '/')
        // this.activeModal.close('logged in')
      }, err => {
        if (err.status == 403) {
          this.invalidLogin = true;
        }
      }
    )
  }

  demouserLogin() {
    this.account.username="demouser"
    this.account.password="demo123"
    this.login();
  }

  demoadminLogin() {
    this.account.username="demoadmin"
    this.account.password="demo123"
    this.login();

  }


}
