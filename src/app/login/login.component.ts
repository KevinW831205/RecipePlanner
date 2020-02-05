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
export class LoginComponent implements OnInit {

  account: SignupInfo = {
    username: null,
    password: null
  }

  constructor(public activeModal: NgbActiveModal, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.account)
      .subscribe(r => {
        console.log(r)
      },
      e=>{
        console.log(e)
      })
  }

}
