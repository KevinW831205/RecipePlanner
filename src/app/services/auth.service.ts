import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, baseUrl } from './httpConfig';
import { SignupInfo } from '../models/SignupInfo';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../models/Account';
import { take } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<Account>;
  userSubject = new Subject<Account>();

  constructor(private http: HttpClient, private router: Router, private accountService: AccountService) {
    this.user$ = this.userSubject.asObservable();
  }

  login(loginInfo: SignupInfo): Observable<Account> {
    return this.http.post<Account>(baseUrl + "login/", loginInfo, httpOptions)
  }

  checkUserPersist() {
    let user = localStorage.getItem('user');
    if (user) {
      this.accountService.getAccount(JSON.parse(user)).subscribe(res => {
        this.userSubject.next(res);
      })
    }
  }

  isLoggedIn() {
    let user = localStorage.getItem('user');
    if (user) {
      return true;
    }
    return false;
  }

  async isAdmin() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      user = await this.accountService.getAccount(user).toPromise();
      console.log("user is admin: ", user.admin);
      return user.admin;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/'])
  }
}
