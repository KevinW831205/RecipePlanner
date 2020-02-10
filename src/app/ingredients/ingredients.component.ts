import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/Ingredient';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() recipe: Recipe;
  @Input('canEdit') canEdit: boolean = false;
  edit: boolean[] = [];
  editError: boolean[] = [];

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

  updateIngredient(i, ingredient: Ingredient, newName, newAmount) {
    if (!newName || !newAmount) {
      this.editError[i] = true;
      return;
    }
    ingredient.name = newName;
    ingredient.amount = newAmount;
    this.ingredientService.update(ingredient).subscribe(
      res => {
        this.recipe.ingredientList[i] = res;
        this.toggleEdit(i)
      },
      err => {

      }
    )
  }

  deleteIngredient(i, ingredient: Ingredient) {
    this.ingredientService.delete(ingredient.id).subscribe(
      res => {
        this.recipe.ingredientList.splice(i, 1);
      },
      err => {

      }
    )
  }

  toggleEdit(i) {
    this.edit[i] = !this.edit[i];
  }


}
