import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Account } from '../models/Account';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  user: Account;
  recipesUnpublished: Recipe[] = [];
  recipesPublished: Recipe[] = [];
  userSubscription: Subscription;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.userSubscription = this.authService.user$.subscribe(
      res => {
        this.user = res;
        this.recipesUnpublished = this.user.recipesCreated.filter(r=>{
          return !r.published;
        })
        this.recipesPublished = this.user.recipesCreated.filter(r=>{
          return r.published;
        })
      }
    )
  }

}
