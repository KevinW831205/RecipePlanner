import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, baseUrl } from './httpConfig';
import { SignupInfo } from '../models/SignupInfo';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<Account>;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  login(loginInfo : SignupInfo){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '.'
    this.user$ =this.http.post<Account>(baseUrl+"login/",loginInfo,httpOptions);
    this.router.navigate([returnUrl])
  }

  logout(){
    this.user$ = null;
    this.router.navigate(['/'])
  }
}
