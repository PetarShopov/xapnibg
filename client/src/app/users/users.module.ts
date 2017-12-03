import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { UsersService } from './users.service'

import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'

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