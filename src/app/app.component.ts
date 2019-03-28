import { Component, Output, EventEmitter } from '@angular/core';
import { AuthCheck } from './AuthCheck';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = "log IN Continue";
  condition = false;
  constructor(private authentication: AuthCheck, private route: Router) {

  }
  login() {
  
    
    this.condition = true;
    this.route.navigate(['/login'])
  }
  logOut() {
    this.authentication.loggedOut();
    this.status = "logged Out",
      this.condition = false;
  }

}

