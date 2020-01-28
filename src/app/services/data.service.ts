import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService<someType> {

  constructor(private http: HttpClient, private url) { }

  getAll(): Observable<someType[]> {
    try {
      return this.http.get<someType[]>(this.url, httpOptions);
    } catch (error) {
      this.handleError(error);
    }
  }

  get(id): Observable<someType> {
    try {
      return this.http.get<someType>(this.url + '/' + id);
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
      this.http.put<someType>(this.url + "/" + resource.id, JSON.stringify(resource));
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

  private handleError(error: Response) {
    if (error.status === 400) {
    }
    if (error.status === 404) {
    }
  }

}
