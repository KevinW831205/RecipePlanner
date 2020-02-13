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

  categorySubscription: Subscription;
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
        this.filteredRecipes = (res == 'All') ? this.recipes : this.recipes.filter(r => {
          for (let i = 0; i < r.categoryTags.length; i++) {
            if (r.categoryTags[i].name == res) {
              return true;
            };
          }
          return false;
        })
      }, err => {

      }
    )

    this.querySubscription = this.filterSerivce.getQuery$().subscribe(
      res => {
        this.filteredRecipes = (!res) ? this.recipes : this.recipes.filter(r => {
          return r.name.toLowerCase().includes(res.toLowerCase());
        })
      }, err => {

      }
    )
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.recipeSubscription.unsubscribe();
  }


}
