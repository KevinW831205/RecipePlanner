import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalContentComponent } from '../login-modal-content/login-modal-content.component';

@Component({
  selector: 'app-login-modal-btn',
  templateUrl: './login-modal-btn.component.html',
  styleUrls: ['./login-modal-btn.component.css']
})
export class LoginModalBtnComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(LoginModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {

  }
}
