import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  hasError$: Observable<boolean>;
  errorSubject = new Subject<boolean>()

  constructor() {
    this.hasError$ = this.errorSubject.asObservable();
  }

  getHasError$() {
    return this.hasError$;
  }

  emitError() {
    this.errorSubject.next(true);
    setTimeout(() => {
      this.errorSubject.next(false);
    }, 2000)
  }
}
