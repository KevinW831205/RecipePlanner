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
    console.log(baseUrl);
    return this.http.get<Recipe[]>(baseUrl + "recipe/published", httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    );
  }

  patchTogglePublished(recipeId): Observable<Recipe> {
    return this.http.patch<Recipe>(baseUrl + "recipe/published/" + recipeId, null, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    );
  }

  patchName(recipeId, name): Observable<Recipe> {
    return this.http.patch<Recipe>(`${baseUrl}recipe/name/${recipeId}?name=${name}`, null, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    );
  }

  patchImageUrl(recipeId, url): Observable<Recipe> {
    return this.http.patch<Recipe>(`${baseUrl}recipe/imageurl/${recipeId}?url=${url}`, null, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    )
  }

  patchDescription(recipeId, description: string): Observable<Recipe> {
    return this.http.patch<Recipe>(`${baseUrl}recipe/description/${recipeId}`, description, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    )
  }

  addTag(recipeId, tagId) {
    return this.http.put<Recipe>(`${baseUrl}recipe/tag?recipe_id=${recipeId}&tag_id=${tagId}`, null, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    );
  }

  deleteTag(recipeId, tagId) {
    return this.http.delete<Recipe>(`${baseUrl}recipe/tag?recipe_id=${recipeId}&tag_id=${tagId}`, httpOptions).pipe(
      catchError(err => { return super.handleError(err) })
    );
  }
}
