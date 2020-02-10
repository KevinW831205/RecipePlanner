import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/Ingredient';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() recipe: Recipe;
  @Input('canEdit') canEdit: boolean = true;
  edit: boolean[] = [];

  ingredientInput: Partial<Ingredient> = {
    name: "",
    amount: ""
  }

  constructor(private ingredientService: IngredientService) { }

  addIngredient(form: NgForm) {
    let ingredient = new Ingredient(this.ingredientInput);
    ingredient.recipeId = this.recipe.id;

    this.ingredientService.create(ingredient).subscribe(
      res => {
        this.recipe.ingredientList.push(res);
        form.reset();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateIngredient(i, form: NgForm) {

    this.toggleEdit(i)
  }

  toggleEdit(i) {
    this.edit[i] = !this.edit[i];
  }


}
