import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Router } from '@angular/router'
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RoutesModule } from './routes.modules';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeService } from './recipe.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyRecipesComponent,
    AddRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    RoutesModule,
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
  }
}
