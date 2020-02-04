import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { httpOptions } from './httpConfig';




@Injectable({
  providedIn: 'root'
})

export class DataService<someType> {

  url

  constructor(public http: HttpClient, url: string) {
    this.url = url;
  }

  getAll(): Observable<someType[]> {
    try {
      return this.http.get<someType[]>(this.url, httpOptions);
    } catch (error) {
      this.handleError(error);
    }
  }

  get(id): Observable<someType> {
    try {
      return this.http.get<someType>(this.url + '/' + id, httpOptions);
    } catch (error) {
      this.handleError(error);
    }
  }


  create(resource): Observable<someType> {
    try {
      return this.http.post<someType>(this.url, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  update(resource): Observable<someType> {
    try {
      return this.http.put<someType>(this.url + "/" + resource.id, JSON.stringify(resource));
    } catch (error) {
      this.handleError(error);
    }
  }

  delete(id): Observable<someType> {
    try {
      return this.http.delete<someType>(this.url + "/" + id);
    } catch (error) {
      this.handleError(error);
    }

  }

  handleError(error: Response) {
    if (error.status === 400) {
    }
    if (error.status === 404) {
    }
  }

}
