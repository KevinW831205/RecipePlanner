import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe'
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { 

  }


  ngOnInit() {
    this.recipeService.get(1);
  }

}
