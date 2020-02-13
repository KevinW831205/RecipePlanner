import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Rating } from '../models/Rating';
import { baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends DataService<Rating>{

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "rating", errorService)
  }

  checkRated(recipeId, accountId): Promise<Rating> {
    try {
      return this.http.get<Rating>(`${baseUrl}rating/rated?recipe_id=${recipeId}&account_id=${accountId}`).pipe(
        catchError(err => {
          return super.handleError(err);
        })
      ).toPromise();
    } catch (error) {
      console.log(error)
      return null;
    }
  }

}
