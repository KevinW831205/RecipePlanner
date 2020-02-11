import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe'
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Account } from '../models/Account';
import { AuthService } from '../services/auth.service';
import { Rating } from '../models/Rating';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent {

  user: Account;
  recipe: Recipe;

  constructor(private authService: AuthService, private recipeService: RecipeService, private route: ActivatedRoute, private ratingService: RatingService) {
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

  rateRecipe(rate) {
    console.log("rate", rate)
    let rating = new Rating({ accountId: this.user.id, recipeId: this.recipe.id, rating: rate });
    this.ratingService.create(rating).subscribe(
      res => {
        console.log(res)
      },
      err => {

      }
    );

  }

}
