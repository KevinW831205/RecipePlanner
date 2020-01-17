import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-star-rating',
  templateUrl: './recipe-star-rating.component.html',
  styleUrls: ['./recipe-star-rating.component.css']
})
export class RecipeStarRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentRate = 3.58;

}
