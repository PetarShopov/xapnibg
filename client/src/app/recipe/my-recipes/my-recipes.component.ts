import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model'
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyRecipesComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  isLoading = false;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  openAddRecipe() {
    this.router.navigateByUrl('/recipes/add-recipe')
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id).subscribe(result => {
      this.router.navigateByUrl('/recipes/my-recipes')
  })
  }

  getRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe(data => {
      let currentUser = this.authService.getUser();
      this.recipes = data.recipes.filter(function(item){
        return item.author === currentUser;
      });
      this.isLoading = false;
    })
  }
}
