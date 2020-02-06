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
export class ProfileComponent implements OnInit, OnDestroy {

  user: Account;
  aboutMeTextArea: string = "";
  aboutMeEditing: boolean = false;
  editingImage: boolean = false;
  imageUrlInput: string = "";
  userSubscription: Subscription;

  constructor(private authService: AuthService, private accountService: AccountService) {

  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(res => {
      this.user = res;
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  saveAboutMe(id: number) {
    this.accountService.patchAboutMe({ aboutMe: this.aboutMeTextArea }, id).subscribe(
      res => {
        console.log(res)
        this.user.aboutMe=this.aboutMeTextArea;
        this.aboutMeTextArea = "";
        this.toggleEditAboutMe();
      },
      err => {
        console.log(err)
      }
    )
  }

  toggleEditAboutMe() {
    this.aboutMeEditing = !this.aboutMeEditing;
  }

  populateAboutMe(aboutMe: string) {
    this.aboutMeTextArea = aboutMe;
  }

  toggelEditingImage() {
    this.editingImage = !this.editingImage;
  }

  saveImageUrl(id: number) {
    this.accountService.patchImageUrl({ profileImageUrl: this.imageUrlInput }, id).subscribe(
      res => {
        console.log(res);
        this.user.profileImageUrl = this.imageUrlInput;
        this.imageUrlInput = "";
        this.toggelEditingImage();
      },
      err => {
        console.log(err);
      }
    )
  }

}
