import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PrivateRoute } from './core/private-route'
import { HomeComponent } from './home/home.component'
import { MyRecipesComponent } from './my-recipes/my-recipes.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes/my-recipes', component: MyRecipesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }