import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private url) { }

  getAll() {
    try {
      return this.http.get(this.url);
    } catch (error) {
      this.handleError(error);
    }
  }

  get(id) {
    try {
      return this.http.get(this.url + '/' + id);
    } catch (error) {
      this.handleError(error);
    }
  }


  create(resource) {
    try {
      return this.http.post(this.url, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  update(resource) {
    try {
      this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  delete(id) {
    try {
      return this.http.delete(this.url + "/" + id);
    } catch (error) {
      this.handleError(error);
    }

  }

  private handleError(error: Response) {
    if (error.status === 400) {
    }
    if (error.status === 404) {
    }
  }

}
