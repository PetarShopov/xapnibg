import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  isLoading = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.isLoading = true;
    this.recipes = this.recipeService.getRecipes().finally(() => this.isLoading = false)
  }
}
