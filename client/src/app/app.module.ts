import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { BeverageModule } from './beverage/beverage.module';

import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes.modules';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeService } from './recipe.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CensoreTextPipe } from './censore-text.pipe'

import { AuthService } from './core/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyRecipesComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    CensoreTextPipe
  ],
  imports: [
    AlertModule.forRoot(),
    CoreModule,
    HttpModule,
    RoutesModule,
    BrowserModule,
    FormsModule,
    UsersModule,
    BeverageModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
}
