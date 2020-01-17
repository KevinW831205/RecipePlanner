import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-modal-btn',
  templateUrl: './login-modal-btn.component.html',
  styleUrls: ['./login-modal-btn.component.css']
})
export class LoginModalBtnComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {

  }
}
