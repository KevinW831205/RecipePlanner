import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() recipe: Recipe;
  ingredientInput: Partial<Ingredient> = {
    name: "",
    amount: ""
  }

  constructor(private ingredientService: IngredientService) { }

  addIngredient() {
    let ingredient = new Ingredient(this.ingredientInput);
    ingredient.recipeId = this.recipe.id;
    console.log(ingredient)

  }


}
