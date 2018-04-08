import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RegisterComponent } from './users/register/register.component'
import { LoginComponent } from './users/login/login.component'
import { ProfileComponent } from './users/profile/profile.component'
import { PrivateRoute } from './core/private-route'
import { HomeComponent } from './home/home.component'
import { AllBeveragesComponent } from './beverage/all-beverages/all-beverages.component'
import { AddBeverageComponent } from './beverage/add-beverage/add-beverage.component'
import { ContactsComponent } from './contacts/contacts.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent },
    { path: 'users/profile', component: ProfileComponent },   
    { path: 'beverages/all', component: AllBeveragesComponent },
    { path: 'beverages/add-beverage', component: AddBeverageComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }