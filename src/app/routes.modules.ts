import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PrivateRoute } from './core/private-route'
import { HomeComponent } from './home/home.component'
import { MyRecipesComponent } from './my-recipes/my-recipes.component'
import { AddRecipeComponent } from './add-recipe/add-recipe.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes/my-recipes', component: MyRecipesComponent },
    { path: 'recipes/add-recipe', component: AddRecipeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }