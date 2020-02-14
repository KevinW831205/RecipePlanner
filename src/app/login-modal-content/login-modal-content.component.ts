import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrls: ['./login-modal-content.component.css']
})
export class LoginModalContentComponent {

  constructor(public activeModal: NgbActiveModal) { }

  successfulLogin: boolean;

  checkSubmit(e) {
    if (e) {
      this.toggleSuccessfulLogin();
      setTimeout(() => {
        this.toggleSuccessfulLogin();
        this.activeModal.close('logged in')
      }, 3000)
    }
  }

  toggleSuccessfulLogin() {
    this.successfulLogin = !this.successfulLogin;
  }

}
