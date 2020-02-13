import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { httpOptions, baseUrl } from './httpConfig';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends DataService<Recipe> {
  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "recipe", errorService);
  }



  getPublished(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseUrl + "recipe/published", httpOptions).pipe(
      catchError(err => { return super.handleError(err) }
      )
    );


    // try {
    // return this.http.get<Recipe[]>(baseUrl + "recipe/published", httpOptions);
    // } catch (error) {
    //   super.handleError(error);
    // }
  }

  patchTogglePublished(recipeId): Observable<Recipe> {
    try {
      return this.http.patch<Recipe>(baseUrl + "recipe/published/" + recipeId, null, httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

  patchName(recipeId, name): Observable<Recipe> {
    try {
      return this.http.patch<Recipe>(`${baseUrl}recipe/name/${recipeId}?name=${name}`, null, httpOptions)
    } catch (error) {
      super.handleError(error)
    }
  }

  patchImageUrl(recipeId, url): Observable<Recipe> {
    try {
      return this.http.patch<Recipe>(`${baseUrl}recipe/imageurl/${recipeId}?url=${url}`, null, httpOptions);
    } catch (error) {
      super.handleError(error)
    }
  }

  patchDescription(recipeId, description: string): Observable<Recipe> {
    try {
      return this.http.patch<Recipe>(`${baseUrl}recipe/description/${recipeId}`, description, httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

  addTag(recipeId, tagId) {
    try {
      return this.http.put<Recipe>(`${baseUrl}recipe/tag?recipe_id=${recipeId}&tag_id=${tagId}`, null, httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

  deleteTag(recipeId, tagId) {
    try {
      return this.http.delete<Recipe>(`${baseUrl}recipe/tag?recipe_id=${recipeId}&tag_id=${tagId}`, httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

}
