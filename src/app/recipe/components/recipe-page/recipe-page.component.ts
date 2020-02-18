import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from '../../../shared/models/Recipe';
import { FilterService } from '../../../shared/services/filter.service';
import { RecipeService } from '../../../shared/services/recipe.service';

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
  query;
  category;
  constructor(private recipeService: RecipeService, private filterSerivce: FilterService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.getPublished().subscribe(
      res => {
        this.recipes = res;
        this.filteredRecipes = res;
      }, err => { }
    )

    this.categorySubscription = this.filterSerivce.getCategory$().subscribe(
      res => {
        this.category = res;
        this.filter();
      }, err => {

      }
    )

    this.querySubscription = this.filterSerivce.getQuery$().subscribe(
      res => {
        this.query = res;
        this.filter();
      }, err => {

      }
    )
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.recipeSubscription.unsubscribe();
  }

  filter() {
    console.log("filter")
    this.categoryFilter();
    this.queryFilter()
  }

  categoryFilter() {
    this.filteredRecipes = (this.category == 'All') ? this.recipes : this.recipes.filter(r => {
      for (let i = 0; i < r.categoryTags.length; i++) {
        if (r.categoryTags[i].name == this.category) {
          return true;
        };
      }
      return false;
    })

  }

  queryFilter() {
    this.filteredRecipes = (!this.query) ? this.filteredRecipes : this.filteredRecipes.filter(r => {
      return r.name.toLowerCase().includes(this.query.toLowerCase());
    })
  }


}
