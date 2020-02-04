import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: { username: string, password: string; } = {
    username: null,
    password: null
  }

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    console.log(this.account.username, this.account.password)
    setTimeout(() => { this.activeModal.close('Close click') }, 1000)
  }

}
