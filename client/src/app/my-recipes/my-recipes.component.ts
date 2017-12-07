import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../models/recipe.model'

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyRecipesComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  isLoading= false;

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  openAddRecipe() {
    this.router.navigateByUrl('/recipes/add-recipe')    
  }
  
  getRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes;
      this.isLoading = false;
    })
  }
}
