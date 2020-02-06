import { Injectable } from '@angular/core';


import { httpOptions, baseUrl } from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../models/SignupInfo';
import { Account } from '../models/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {

  }

  getAccount(userName: string): Observable<Account>{
    return this.http.get<Account>(baseUrl+"account/user?username="+userName);
  }

  createAccount(accountInfo: SignupInfo) {
    return this.http.post(baseUrl + "account/", accountInfo, httpOptions);
  }

  patchAboutMe(aboutMe: {aboutMe:string}, id:number){
    console.log(baseUrl+"account/aboutme/"+id)
    return this.http.patch(baseUrl+"account/aboutme/"+id,aboutMe, httpOptions);
  }
}
