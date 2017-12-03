import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  authenticated: boolean = false;
  username: string = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isUserAuthenticated) {
      this.authenticated = true;
      this.username = this.authService.getUser();
    }
  }

  logout() {
    this.authService.deauthenticateUser();
    this.authService.removeUser();
    this.authenticated = false;

    this.router.navigateByUrl('')
}
}
