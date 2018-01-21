import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from '../core/private-route';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { MyRecipesComponent } from '../recipe/my-recipes/my-recipes.component';
import { AddRecipeComponent } from '../recipe/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { SaladRecipesComponent } from '../recipe/salad-recipes/salad-recipes.component';
import { StarterRecipesComponent } from '../recipe/starter-recipes/starter-recipes.component';
import { MainRecipesComponent } from '../recipe/main-recipes/main-recipes.component';
import { DesertRecipesComponent } from '../recipe/desert-recipes/desert-recipes.component';
 
const recipeRoutes: Routes = [
    { path: 'recipes/my-recipes/all', component: MyRecipesComponent , canActivate: [PrivateRoute]},
    { path: 'recipes/add-recipe', component: AddRecipeComponent , canDeactivate: [CanDeactivateGuard]},
    { path: 'recipes/salad-recipes', component: SaladRecipesComponent },
    { path: 'recipes/starter-recipes', component: StarterRecipesComponent },
    { path: 'recipes/main-recipes', component: MainRecipesComponent },
    { path: 'recipes/desert-recipes', component: DesertRecipesComponent },
    { path: 'recipes/:id', component: RecipeDetailsComponent },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeRoutingModule { }