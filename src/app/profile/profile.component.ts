import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription, of } from 'rxjs';
import { Account } from '../models/Account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<Account>;
  aboutMeTextArea: string = "";
  aboutMeEditing: boolean = false;


  constructor(private authService: AuthService, private accountService: AccountService) {

  }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.user$ = this.authService.user$
  }

  saveAboutMe(id: number) {
    this.accountService.patchAboutMe({ aboutMe: this.aboutMeTextArea }, id).subscribe(
      res=>{
        console.log(res)
        this.toggleEditAboutMe();
      },
      err=>{
        console.log(err)
      }
    )
  }

  toggleEditAboutMe() {
    this.aboutMeEditing = !this.aboutMeEditing;
  }


}
