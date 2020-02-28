import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ingredient } from '../models/Ingredient';
import { baseUrl } from './httpConfig';
import { DataService } from './data.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends DataService<Ingredient> {

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "ingredient", errorService)
  }
}
