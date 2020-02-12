import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  category$: Observable<string>
  private categorySubject = new Subject<string>();

  constructor() {
    this.category$ = this.categorySubject.asObservable();
  }

  getCategory$() {
    return this.category$;
  }

  setCategory(category: string) {
    this.categorySubject.next(category);
  }
}
