import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { BeverageModule } from './beverage/beverage.module';
import { RecipeModule } from './recipe/recipe.module';

import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes.modules';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './core/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CoreModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    UsersModule,
    BeverageModule,
    RecipeModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
}
