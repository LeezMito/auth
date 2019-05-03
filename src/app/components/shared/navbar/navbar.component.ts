import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {

  }

  public clickLogin(){
    this.auth.login();
  }

  public clickLogout(){
    this.auth.logout();
  }

}
