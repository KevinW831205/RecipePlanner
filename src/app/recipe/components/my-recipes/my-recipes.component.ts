import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Account } from '../../../shared/models/Account';
import { Recipe } from '../../../shared/models/Recipe';
import { AuthService } from '../../../shared/services/auth.service';
import { RecipeService } from '../../../shared/services/recipe.service';

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

  constructor(private authService: AuthService, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.userSubscription = this.authService.user$.subscribe(
      res => {
        this.user = res;
        this.recipesUnpublished = this.user.recipesCreated.filter(r => {
          return !r.published;
        })
        this.recipesPublished = this.user.recipesCreated.filter(r => {
          return r.published;
        })
      }
    )
  }


}
