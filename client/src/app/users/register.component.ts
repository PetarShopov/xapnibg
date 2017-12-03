import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { UsersService } from './users.service'
import { RegisterUserModel } from './register-user.model'

@Component({
    selector: 'register',
    templateUrl: '/register.component.html'
})
export class RegisterComponent {
    user: RegisterUserModel = new RegisterUserModel();

    constructor(
        private router: Router,
        private userService: UsersService
    ) { }

    register() {
        this.userService.register(this.user)
            .subscribe(userRegistered => {
                if (userRegistered.success) {
                    this.router.navigateByUrl('users/login')
                }
            })
    }
}
