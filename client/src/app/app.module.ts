import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { BeverageModule } from './beverage/beverage.module';
import { RecipeModule } from './recipe/recipe.module';

import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes.modules';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';

import { AuthService } from './core/auth.service'
import { DialogService } from './dialog.service';
import { ContactsService } from './contacts/contacts.service';
import { AdminService } from './admin/admin.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule,
        MatDatepickerModule, MatNativeDateModule, MatRadioModule, 
        MatSliderModule, MatStepperModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactsComponent,
    AdminComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CoreModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    BeverageModule,
    RecipeModule,
    RoutesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    MatStepperModule
  ],
  providers: [
    DialogService,
    CanDeactivateGuard,
    ContactsService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
}
