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
      this.recipe = new Recipe(r);
    });

  }

  async checkRated(): Promise<Rating> {
    if (this.user && this.recipe) {
      let result = await this.ratingService.checkRated(this.recipe.id, this.user.id);
      return result;
    }
    return Promise.resolve(null);
  }

  async rateRecipe(rate) {
    let ratedRating = await this.checkRated();
    if (ratedRating) {
      let oldRating = ratedRating.rating;
      ratedRating.rating = rate;
      this.ratingService.update(ratedRating).subscribe(
        res => {
          this.recipe.updateRating(res.rating, oldRating)
        },
        err => {

        }
      )
    } else {
      let rating = new Rating({ accountId: this.user.id, recipeId: this.recipe.id, rating: rate });
      this.ratingService.create(rating).subscribe(
        res => {
          this.recipe.addRating(res.rating);
        },
        err => {

        }
      );
    }
  }

}
