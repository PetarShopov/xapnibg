import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { UsersService } from './users.service'

import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        ProfileComponent
    ],
    providers: [
        UsersService
    ],
    exports: []
})
export class UsersModule { }