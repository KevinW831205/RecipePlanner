import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  category$: Observable<string>;
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, private filterSerivce: FilterService) { }

  ngOnInit() {
    this.recipes$ = this.recipeService.getPublished()
    this.category$ = this.filterSerivce.category$;
  }


}
