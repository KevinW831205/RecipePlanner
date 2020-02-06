import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription, of } from 'rxjs';
import { Account } from '../models/Account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<Account>;
  aboutMeTextArea: string = "";
  aboutMeEditing: boolean = false;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.user$ = this.authService.user$
  }

  saveAboutMe() {

  }


}
