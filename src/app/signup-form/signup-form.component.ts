import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../models/SignupInfo';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  account: SignupInfo = {
    username: null,
    password: null
  }
  cPassword: string = null;

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
  }

  signUp() {
    this.accountService.createAccount(this.account).subscribe(
      r => {
        console.log(r);
      }, error => {

      }
    )
  }

}
