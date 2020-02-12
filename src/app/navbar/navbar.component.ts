import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  faUserCircle = faUserCircle;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(r=>{
      this.user = r;
    })
  }

  logout(){
    this.authService.logout();
  }

}
