import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Account } from '../models/Account';
import { AccountService } from '../shared/services/account.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: Account;
  canEdit: boolean = false;
  aboutMeTextArea: string = "";
  aboutMeEditing: boolean = false;
  editingImage: boolean = false;
  imageUrlInput: string = "";
  userSubscription: Subscription;

  constructor(private authService: AuthService, private accountService: AccountService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.userSubscription = this.accountService.getAccount(username).subscribe(
        res => {
          this.user = res;
        }
      )

    } else {
      this.authService.checkUserPersist();
      this.userSubscription = this.authService.user$.subscribe(res => {
        if (res) {
          this.canEdit = true;
          this.user = res;
        }
      })
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  saveAboutMe(id: number) {
    this.accountService.patchAboutMe({ aboutMe: this.aboutMeTextArea }, id).subscribe(
      res => {
        console.log(res)
        this.user.aboutMe = this.aboutMeTextArea.trim();
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
        this.user.profileImageUrl = this.imageUrlInput.trim();
        this.imageUrlInput = "";
        this.toggelEditingImage();
      },
      err => {
        console.log(err);
      }
    )
  }

}
