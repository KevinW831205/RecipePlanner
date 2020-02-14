import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignupInfo } from '../models/SignupInfo';
import { ActivatedRoute, Router } from '@angular/router';




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

  @Output() submitLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }


  login() {
    this.authService.login(this.account).subscribe(
      res => {
        this.authService.userSubject.next(res);
        this.invalidLogin = false;
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



}
