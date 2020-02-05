import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
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
  private userSubject = new Subject<Account>();

  constructor(private http: HttpClient, private router: Router) {
    this.user$ = this.userSubject.asObservable();
  }

  login(loginInfo: SignupInfo): Observable<Account> {
    console.log("service login")
    this.http.post<Account>(baseUrl + "login/", loginInfo, httpOptions).pipe(
      take(1)
    ).subscribe(
      res => {
        this.userSubject.next(res);
      },
      err=>{
        console.log(err)
      }
    );
    return this.user$
  }

  logout() {
    this.user$ = of(null);
    this.router.navigate(['/'])
  }
}
