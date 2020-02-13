import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe';
import { Observable, Subscription } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit, OnDestroy {

  category;
  categorySubscription: Subscription;
  query: string;
  querySubscription: Subscription;
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService, private filterSerivce: FilterService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.getPublished().subscribe(
      res => {
        this.recipes = res;
        this.filteredRecipes = res;
      }, err => {

      }
    )

    this.categorySubscription = this.filterSerivce.getCategory$().subscribe(
      res => {
        console.log(res)
        this.category = res;

      }, err => {

      }
    )

    this.querySubscription = this.filterSerivce.getQuery$().subscribe(
      res => {
        console.log(res);
        this.query = res;
      }, err => {

      }
    )
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.recipeSubscription.unsubscribe();
  }


}
