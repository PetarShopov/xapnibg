import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainRecipesComponent implements OnInit {
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
    this.recipeService.getRecipes(1, 'no-owner', 'main').subscribe(data => {
      this.recipes = data.recipes.filter(function(item){
        return item.type === 'main';
      });
      this.isLoading = false;
    })
  }
}
