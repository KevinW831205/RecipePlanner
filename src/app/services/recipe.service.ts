import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends DataService {

  constructor(http: HttpClient) {
    let url = "http://localhost:8080/api/recipe/"
    super(http, url);
  }
}
