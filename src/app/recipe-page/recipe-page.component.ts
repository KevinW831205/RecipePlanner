import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe((recipes)=>{
      console.log(recipes)
    })
  }



}
