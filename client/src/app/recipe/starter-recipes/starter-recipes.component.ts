import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'starter-recipes',
  templateUrl: './starter-recipes.component.html',
  styleUrls: ['./starter-recipes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarterRecipesComponent implements OnInit {
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
    this.recipeService.getRecipes(1, 'no-owner', 'starter').subscribe(data => {
      this.recipes = data.recipes.filter(function(item){
        return item.type === 'starter';
      });
      this.isLoading = false;
    })
  }
}
