import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component'
import { PrivateRoute } from './core/private-route'
import { HomeComponent } from './home/home.component'
import { MyRecipesComponent } from './my-recipes/my-recipes.component'
import { AddRecipeComponent } from './add-recipe/add-recipe.component'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { AllBeveragesComponent } from './beverage/all-beverages/all-beverages.component'
import { AddBeverageComponent } from './beverage/add-beverage/add-beverage.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent },
    { path: 'recipes/my-recipes', component: MyRecipesComponent },
    { path: 'recipes/add-recipe', component: AddRecipeComponent },
    { path: 'recipes/:id', component: RecipeDetailsComponent },
    { path: 'beverages/all', component: AllBeveragesComponent },
    { path: 'beverages/add-beverage', component: AddBeverageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }