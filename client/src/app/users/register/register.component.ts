import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { UsersService } from '../users.service'
import { RegisterUserModel } from '../models/register-user.model'

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    user: RegisterUserModel = new RegisterUserModel();
    isErrorMsgVisible: Boolean = false;
    errorMsg: String;

    constructor(
        private router: Router,
        private userService: UsersService
    ) { }

    register() {
        this.userService.register(this.user)
            .subscribe(userRegistered => {
                if (userRegistered['success']) {
                    this.router.navigateByUrl('users/login')
                } else {
                    this.isErrorMsgVisible = true;
                    this.errorMsg = userRegistered['message'];
                    var that = this
                    setTimeout(function(){ 
                        that.isErrorMsgVisible = false; 
                    }, 3000);
                }
            })
    }
}
