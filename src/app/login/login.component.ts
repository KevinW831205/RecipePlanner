import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    "account": new FormGroup({
      "username": new FormControl('', [
      ],
      ),
      "password": new FormControl('', Validators.required)
    })
  });



  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    setTimeout(() => { this.activeModal.close('Close click') }, 1000)
  }

}
