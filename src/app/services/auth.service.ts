import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, baseUrl } from './httpConfig';
import { SignupInfo } from '../models/SignupInfo';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../models/Account';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<Account>;
  userSubject = new Subject<Account>();

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = this.userSubject.asObservable();
  }

  login(loginInfo: SignupInfo): Observable<Account> {
    return this.http.post<Account>(baseUrl + "login/", loginInfo, httpOptions)
  }

  checkUserPersist() {
    let user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  isLoggedIn(){
    let user = localStorage.getItem('user');
    if(user){
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/'])
  }
}
