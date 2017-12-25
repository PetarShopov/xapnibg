import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MyRecipesComponent } from '../recipe/my-recipes/my-recipes.component';
import { AddRecipeComponent } from '../recipe/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
 
const recipeRoutes: Routes = [
    { path: 'recipes/my-recipes', component: MyRecipesComponent },
    { path: 'recipes/add-recipe', component: AddRecipeComponent },
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