import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
