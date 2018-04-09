import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../core/auth.service'
import { UsersService } from '../users//users.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnChanges {
  authenticated: boolean = false;
  isOwner: boolean = false;
  username: string = null;

  constructor(
    private router: Router,
    private userService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userService.auth().subscribe(
      value => {
        if (value) {
          this.authenticated = true;
          this.username = this.authService.getUser();
          this.isOwner = this.authService.getRole() === 'owner';
        }
      }
    );
    if (this.authService.isUserAuthenticated()) {
      this.authenticated = true;
      this.username = this.authService.getUser();
      this.isOwner = this.authService.getRole() === 'owner';
    }
  }

  ngOnChanges() {
    if (this.authService.isUserAuthenticated()) {
      this.authenticated = true;
      this.username = this.authService.getUser();
      this.isOwner = this.authService.getRole() === 'owner';
    }
  }

  logout() {
    this.authService.deauthenticateUser();
    this.authService.removeUser();
    this.authService.removeRole();
    this.authenticated = false;
    this.isOwner = this.authService.getRole() === 'owner';
    this.router.navigateByUrl('')
  }
}
