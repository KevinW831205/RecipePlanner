import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes$ = this.recipeService.getAll()
  }


}
