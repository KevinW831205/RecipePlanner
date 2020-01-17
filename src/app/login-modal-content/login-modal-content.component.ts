import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: './login-modal-content.component.html',
  styleUrls: ['./login-modal-content.component.css']
})
export class LoginModalContentComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
