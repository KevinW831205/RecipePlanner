import { Component, OnInit } from '@angular/core';
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
  }

  constructor(public activeModal: NgbActiveModal, private authService: AuthService) { }

  login() {
    this.authService.login(this.account)
      .subscribe(r => {
        this.activeModal.close('logged in')
      }, e => {
        console.log(e)
      })
  }

}
