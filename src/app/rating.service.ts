import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Rating } from './models/Rating';
import { baseUrl } from './services/httpConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends DataService<Rating>{

  constructor(http: HttpClient) {
    super(http, baseUrl)
  }
}
