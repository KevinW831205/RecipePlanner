import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Category } from '../../models/Category';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../shared/services/httpConfig';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService<Category>{

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "categoryTag", errorService)
  }
}
