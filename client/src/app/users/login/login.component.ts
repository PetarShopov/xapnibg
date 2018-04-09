import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../core/auth.service'

import { UsersService } from '../users.service'
import { LoginUserModel } from '../models/login-user.model'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    user: LoginUserModel = new LoginUserModel();
    isErrorMsgVisible: Boolean = false;
    errorMsg: String;

    constructor(
        private router: Router,
        private userService: UsersService,
        private authService: AuthService
    ) { }

    login() {
        this.userService.login(this.user)
            .subscribe(user => {
                if (user.success) {
                    this.authService.authenticateUser(user.token);
                    this.authService.saveUser(user.user.name);
                    this.authService.saveRole(user.user.role);
                    this.userService.finishLogin();
                    
                    this.router.navigateByUrl('')
                } else {
                    this.isErrorMsgVisible = true;
                    this.errorMsg = user.message;
                    var that = this
                    setTimeout(function(){ 
                        that.isErrorMsgVisible = false; 
                    }, 3000);
                }
            })

    }
}