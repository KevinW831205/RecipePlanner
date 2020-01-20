import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Class/Recipe'

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {

  recipe: Recipe;

  constructor() { }


  ngOnInit() {
  }

}
