import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(recipeForm){
    console.log(recipeForm);
    new Recipe(null,null,null,null,null,null,null,null, null);
  }

}
