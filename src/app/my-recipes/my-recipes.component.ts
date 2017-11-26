import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

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

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.isLoading = true;
    this.recipes = this.recipeService.getRecipes().finally(() => this.isLoading = false)
  }
}
