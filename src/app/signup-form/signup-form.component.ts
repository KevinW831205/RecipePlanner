import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../models/SignupInfo';
import { AccountService } from '../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private accountService: AccountService, private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  signUp() {
    this.accountService.createAccount(this.account).subscribe(
      r => {
        console.log(r);
        const modalRef = this.modalService.open(SignupSuccessModalComponent);
        modalRef.componentInstance.name = 'Login';
      }, error => {
        if(error.status === 500){
          this.uniqueError = true;
        }
      }
    )
  }

}
