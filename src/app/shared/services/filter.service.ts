import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  category$: Observable<string>;
  private categorySubject = new Subject<string>();
  query$: Observable<string>;
  private querySubject = new Subject<string>();

  constructor() {
    this.category$ = this.categorySubject.asObservable();
    this.query$ = this.querySubject.asObservable();
  }

  getCategory$() {
    return this.category$;
  }

  setCategory(category: string) {
    this.categorySubject.next(category);
  }

  getQuery$() {
    return this.query$;
  }

  setQuery(query: string) {
    this.querySubject.next(query);
  }
}
