import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignupInfo } from '../models/SignupInfo';




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

  @Output() change = new EventEmitter();

  constructor(private authService: AuthService) { }


  login() {
    this.authService.login(this.account).subscribe(
      res => {
        this.authService.userSubject.next(res);
        this.invalidLogin = false;
        localStorage.setItem('user',JSON.stringify(res))
        this.change.emit('success');
        // this.activeModal.close('logged in')
      }, err => {
        if (err.status == 403) {
          this.invalidLogin = true;
        }
      }
    )
  }

}
