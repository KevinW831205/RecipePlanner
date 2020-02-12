import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output('addRate') rateEmitter = new EventEmitter<number>();

  hovered = 0;

  constructor() { }

  ngOnInit() {
  }

  addRate() {
    this.rateEmitter.emit(this.hovered);
  }


}
