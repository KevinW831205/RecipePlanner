import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-success-modal',
  templateUrl: './signup-success-modal.component.html',
  styleUrls: ['./signup-success-modal.component.css']
})
export class SignupSuccessModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }

  redirect(){
    this.activeModal.close('redirect')
    this.router.navigate(['/'])
  }

}
