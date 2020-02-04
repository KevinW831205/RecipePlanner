import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';



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

  constructor(public activeModal: NgbActiveModal, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    setTimeout(() => { this.activeModal.close('Close click') }, 1000)
  }

}
