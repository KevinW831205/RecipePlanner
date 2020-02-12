import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService<Category>{

  constructor(http: HttpClient) { 
    super(http,baseUrl+"categoryTag")
  }
}
