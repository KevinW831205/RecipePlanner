import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe'
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Account } from '../models/Account';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent {

  user: Account;
  recipe: Recipe;
  isRating = false;

  constructor(private authService: AuthService, private recipeService: RecipeService, private route: ActivatedRoute) {
    this.authService.checkUserPersist();
    this.authService.user$.pipe(
      take(1)
    ).subscribe(res => {
      this.user = res;
    })

    this.recipeService.get(this.route.snapshot.paramMap.get('id')).pipe(
      take(1)
    ).subscribe(r => {
      this.recipe = r;
    });

  }


}
