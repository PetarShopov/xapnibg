import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'
import { PrivateRoute } from './private-route'


@NgModule({
    declarations: [],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [
        HttpService,
        AuthService,
        PrivateRoute
    ],
    exports: []
})
export class CoreModule { }