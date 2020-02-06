import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { Account } from '../models/Account';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit, OnDestroy {

  user: Account;
  subscription: Subscription

  constructor(private authService: AuthService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.authService.checkUserPersist();
    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(recipeForm) {

    let recipe = new Recipe(recipeForm);
    recipe.name = recipe.name.trim();
    recipe.description = recipe.description.trim();
    recipe.account = { id: this.user.id }
    console.log(recipe)
    this.recipeService.create(recipe).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }

}
