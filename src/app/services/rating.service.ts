import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Rating } from '../models/Rating';
import { baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends DataService<Rating>{

  constructor(http: HttpClient) {
    super(http, baseUrl + "rating")
  }

  checkRated(): Promise<Rating> {
    try {
      return this.http.get<Rating>(baseUrl + "rating/rated").toPromise();
    } catch (error) {
      console.log(error)
    }
  }

}
