import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent implements OnInit {

  authorized = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    let recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.get

  }

}
