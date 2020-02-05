import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions, baseUrl } from './httpConfig';
import { SignupInfo } from '../models/SignupInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<Account>;

  constructor(private http: HttpClient) { }

  login(loginInfo : SignupInfo): Observable<Account>{
    return this.http.post<Account>(baseUrl+"login/",loginInfo,httpOptions);
  }

  logout(){
    
  }
}
