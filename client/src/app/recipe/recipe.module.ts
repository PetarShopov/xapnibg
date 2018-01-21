import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SaladRecipesComponent } from './salad-recipes/salad-recipes.component';
import { StarterRecipesComponent } from './starter-recipes/starter-recipes.component';
import { MainRecipesComponent } from './main-recipes/main-recipes.component';
import { DesertRecipesComponent } from './desert-recipes/desert-recipes.component';
import { RecipeService } from './recipe.service';
import { CensoreTextPipe } from '../censore-text.pipe';
import { RecipeRoutingModule } from './recipe-routes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ],
  declarations: [
    AddRecipeComponent,
    MyRecipesComponent,
    RecipeDetailsComponent,
    SaladRecipesComponent,
    StarterRecipesComponent,
    MainRecipesComponent,
    DesertRecipesComponent,
    CensoreTextPipe
  ],
  providers: [RecipeService]
})
export class RecipeModule { }