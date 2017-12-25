import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service'
import { CensoreTextPipe } from '../censore-text.pipe'
import { RecipeRoutingModule } from './recipe-routes.module'

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
    CensoreTextPipe
  ],
  providers: [RecipeService]
})
export class RecipeModule { }