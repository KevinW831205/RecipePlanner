import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { httpOptions, baseUrl } from './httpConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends DataService<Recipe> {


  constructor(http: HttpClient) {
    super(http, baseUrl + "recipe/");
  }

  getPublished(): Observable<Recipe[]> {
    try {
      return this.http.get<Recipe[]>(baseUrl + "recipe/published", httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

  patchTogglePublished(recipe): Observable<Recipe> {
    try {
      return this.http.patch<Recipe>(baseUrl + "recipe/published", httpOptions);
    } catch (error) {
      super.handleError
    }

  }


}
