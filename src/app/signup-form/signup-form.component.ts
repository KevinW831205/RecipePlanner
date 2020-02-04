import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  account: { username: string, password: string; } = {
    username: null,
    password: null
  }
  cPassword:string = null;

  
  constructor() { }

  ngOnInit() {
  }

  signUp(){
    
  }

}
