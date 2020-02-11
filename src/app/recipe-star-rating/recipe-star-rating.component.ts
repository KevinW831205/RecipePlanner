import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-star-rating',
  templateUrl: './recipe-star-rating.component.html',
  styleUrls: ['./recipe-star-rating.component.css']
})
export class RecipeStarRatingComponent implements OnInit {
  @Input() averageRating;
  @Input() numberOfRating;
  @Input() canRate = false;

  constructor() { }

  ngOnInit() {
  }


}
