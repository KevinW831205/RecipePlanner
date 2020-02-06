import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { Account } from '../models/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit, OnDestroy {

  user: Account;
  subscription: Subscription;
  error:boolean = false;


  constructor(private authService: AuthService, private recipeService: RecipeService, private router: Router) { }

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
    this.recipeService.create(recipe).subscribe(
      res => {
        this.router.navigate(['recipe', res.id])
      }, err => {
        this.error = true;
        console.log(err);
      }
    )
  }

}
