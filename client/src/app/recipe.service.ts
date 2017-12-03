import { Injectable } from '@angular/core';
import { HttpService } from './core/http.service'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RecipesData } from './core/data'
import { RecipeModel } from './models/recipe.model';
import 'rxjs/add/operator/delay';

@Injectable()
export class RecipeService {
  delayMs = 500;
  constructor(private httpService: HttpService) { }
  
  getRecipes(): any {
    return this.httpService.get('recipes/all');
    // return of(RecipesData.get()).delay(this.delayMs); // simulate latency with delay
  }

  addRecipe(recipe): any {
    recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim())
    return this.httpService.post('recipes/add', recipe);
    // RecipesData.add(new RecipeModel(12,'1234', 'test', ['e','3'], 'sad','ivan', 123))
  }

  getRecipeById(id): Observable<RecipeModel> {
    return this.httpService.get(`recipes/${id}`);    
    // return of(RecipesData.getById(id)).delay(this.delayMs);
  }
}