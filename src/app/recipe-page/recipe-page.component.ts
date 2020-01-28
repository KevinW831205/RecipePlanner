import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("init");
    this.recipeService.getAll().subscribe((recipes)=>{
      this.recipes = recipes;
      console.log(this.recipes)
    })
  }

  recipeId(){
    this.recipes[0].getId();
  }


}
