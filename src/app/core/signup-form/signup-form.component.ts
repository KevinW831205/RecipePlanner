import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { SignupInfo } from '../../shared/models/SignupInfo';
import { AccountService } from '../../shared/services/account.service';
import { AuthService } from '../../shared/services/auth.service';
import { SignupSuccessModalComponent } from '../signup-success-modal/signup-success-modal.component';

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
  uniqueError: boolean;

  constructor(private accountService: AccountService, private modalService: NgbModal, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }

  signUp() {
    this.accountService.createAccount(this.account).subscribe(
      r => {
        console.log(r);
        let modalOptions: NgbModalOptions = {};
        modalOptions.backdrop = 'static';
        modalOptions.keyboard = false;
        const modalRef = this.modalService.open(SignupSuccessModalComponent, modalOptions);
        modalRef.componentInstance.name = 'signupsuccess';
      }, error => {
        if (error.status === 500) {
          this.uniqueError = true;
        }
      }
    )
  }

}
