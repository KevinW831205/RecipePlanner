import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe'
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.recipeService.get(this.route.snapshot.paramMap.get('id')).pipe(
      take(1)
    ).subscribe(r => {
      console.log(r);
      this.recipe = r;
    });

  }


}
