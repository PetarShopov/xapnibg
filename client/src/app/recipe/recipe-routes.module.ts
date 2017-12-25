import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from '../core/private-route';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { MyRecipesComponent } from '../recipe/my-recipes/my-recipes.component';
import { AddRecipeComponent } from '../recipe/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { SaladRecipesComponent } from '../recipe/salad-recipes/salad-recipes.component';
 
const recipeRoutes: Routes = [
    { path: 'recipes/my-recipes', component: MyRecipesComponent , canActivate: [PrivateRoute]},
    { path: 'recipes/add-recipe', component: AddRecipeComponent , canDeactivate: [CanDeactivateGuard]},
    { path: 'recipes/salad-recipes', component: SaladRecipesComponent },
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