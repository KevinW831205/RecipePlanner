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
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, private filterSerivce: FilterService) { }

  ngOnInit() {
    this.recipes$ = this.recipeService.getPublished()
    this.categorySubscription = this.filterSerivce.getCategory$().subscribe(
      res => {
        this.category = res;
        console.log(this.category)
      }
    )
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }


}
