import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'desert-recipes',
  templateUrl: './desert-recipes.component.html',
  styleUrls: ['./desert-recipes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DesertRecipesComponent implements OnInit {
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
    this.recipeService.getRecipes(1, 'no-owner', 'desert').subscribe(data => {
      this.recipes = data.recipes.filter(function(item){
        return item.type === 'desert';
      });
      this.isLoading = false;
    })
  }
}
