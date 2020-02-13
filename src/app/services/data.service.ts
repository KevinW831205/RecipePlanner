import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { httpOptions } from './httpConfig';
import { ErrorService } from './error.service';




@Injectable({
  providedIn: 'root'
})

export class DataService<someType> {
  url

  constructor(public http: HttpClient, url: string, private errorService: ErrorService) {
    this.url = url;
  }

  getAll(): Observable<someType[]> {
    return this.http.get<someType[]>(this.url + "/", httpOptions).pipe(
      catchError(err => { return this.handleError(err) })
    );
  }

  get(id): Observable<someType> {
    return this.http.get<someType>(this.url + '/' + id, httpOptions).pipe(
      catchError(err => { return this.handleError(err) })
    );
  }


  create(resource): Observable<someType> {
    return this.http.post<someType>(this.url + "/", JSON.stringify(resource), httpOptions).pipe(
      catchError(err => { return this.handleError(err) })
    );
  }

  update(resource): Observable<someType> {
    return this.http.put<someType>(this.url + "/" + resource.id, JSON.stringify(resource), httpOptions).pipe(
      catchError(err => { return this.handleError(err) })
    );
  }

  delete(id): Observable<someType> {
    return this.http.delete<someType>(this.url + "/" + id, httpOptions).pipe(
      catchError(err => { return this.handleError(err) })
    );
  }

  handleError(error) {
    if (error.status === 400) {
    }
    if (error.status === 404) {
    }
    this.errorService.emitError();
    return throwError('error occured')
  }

}
