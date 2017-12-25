import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'salad-recipes',
  templateUrl: './salad-recipes.component.html',
  styleUrls: ['./salad-recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaladRecipesComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  isLoading = false;

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes.filter(function(item){
        return item.type === 'salad';
      });
      this.isLoading = false;
    })
  }
}
