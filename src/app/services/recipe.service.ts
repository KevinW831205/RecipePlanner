import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { httpOptions } from './httpConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends DataService<Recipe> {

  constructor(http: HttpClient) {
    let url = "http://localhost:8080/api/recipe/"
    super(http, url);
  }

  getPublished(): Observable<Recipe[]>{
    console.log(super.url+"published")
    try {
      return super.http.get<Recipe[]>(super.url + 'published', httpOptions);
    } catch (error) {
      super.handleError(error);
    }
  }

}
