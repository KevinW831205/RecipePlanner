import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends DataService<Recipe> {

  constructor(http: HttpClient) {
    let url = "http://localhost:8080/api/recipe/"
    super(http, url);
  }

}
