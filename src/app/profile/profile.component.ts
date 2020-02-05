import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Account } from '../models/Account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  
  user: Account;
  subscription: Subscription;

  constructor(private authService : AuthService) { 
    
  }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(res=>{
      this.user = res;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
