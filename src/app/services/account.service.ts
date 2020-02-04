import { Injectable } from '@angular/core';
import { DataService } from './data.service';


import { httpOptions , baseUrl} from './httpConfig';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../models/SignupInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { 
  
  }

  createAccount(accountInfo:SignupInfo){
    this.http.put(baseUrl+"accout/",accountInfo);
  }
}
