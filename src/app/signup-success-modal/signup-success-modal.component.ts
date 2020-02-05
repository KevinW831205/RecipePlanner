import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-success-modal',
  templateUrl: './signup-success-modal.component.html',
  styleUrls: ['./signup-success-modal.component.css']
})
export class SignupSuccessModalComponent {

  constructor(public activeModal: NgbActiveModal, private router: Router) { 
  }



  redirect(){
    this.activeModal.close()
    this.router.navigate(['/'])
  }

}
