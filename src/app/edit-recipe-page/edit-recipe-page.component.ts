import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {

  recipe: Recipe;
  authorized = false;
  recipeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private authService: AuthService, private router:Router) { }

  ngOnInit() {
    let recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeSubscription = this.recipeService.get(recipeId).subscribe(
      recipe => {
        this.recipe = recipe;
        this.authService.checkUserPersist();
        this.authService.user$.subscribe(user => {
          if (user.username == this.recipe.account.username) {
            this.authorized = true;
          }
        })
      },
      err => {

      }
    )
  }

  togglePublished() {
    this.recipeService.patchTogglePublished(this.recipe.id).subscribe(
      res => {
        this.recipe.published = res.published;
      },
      err => {

      }
    )
  }

  deleteRecipe() {
    this.recipeService.delete(this.recipe.id).subscribe(
      res => {
        this.router.navigate(['/my/recipes'])
      })
  }


}
