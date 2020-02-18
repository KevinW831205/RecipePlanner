import { Injectable } from '@angular/core';


import { httpOptions, baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../../models/SignupInfo';
import { Account } from '../../models/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {

  }

  getAllAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(baseUrl + "account/", httpOptions);
  }

  getAccount(userName: string): Observable<Account> {
    return this.http.get<Account>(baseUrl + "account/user?username=" + userName, httpOptions);
  }

  createAccount(accountInfo: SignupInfo) {
    return this.http.post(baseUrl + "account/", accountInfo, httpOptions);
  }

  patchAboutMe(aboutMe: { aboutMe: string }, id: number) {
    return this.http.patch(baseUrl + "account/aboutme/" + id, aboutMe, httpOptions);
  }

  patchImageUrl(url: { profileImageUrl: string }, id: number) {
    return this.http.patch(baseUrl + "account/profileImageUrl/" + id, url, httpOptions)
  }
}
