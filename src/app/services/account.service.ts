import { Injectable } from '@angular/core';


import { httpOptions, baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../models/SignupInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {

  }

  createAccount(accountInfo: SignupInfo) {
    return this.http.post(baseUrl + "account/", accountInfo, httpOptions);
  }
}