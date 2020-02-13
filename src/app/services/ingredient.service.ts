import { Injectable } from '@angular/core';
import { baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Ingredient } from '../models/Ingredient';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends DataService<Ingredient> {

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "ingredient", errorService)
  }
}
