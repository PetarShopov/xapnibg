import { Injectable } from '@angular/core';
import { HttpService } from './core/http.service'

import { Observable } from 'rxjs/Observable';
import { RecipeModel } from './models/recipe.model';

@Injectable()
export class RecipeService {
  constructor(private httpService: HttpService) { }
  
  getRecipes(): any {
    return this.httpService.get('recipes/all');
  }

  addRecipe(recipe): any {
    recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim())
    return this.httpService.post('recipes/add', recipe);
  }

  getRecipeById(id): Observable<RecipeModel> {
    return this.httpService.get(`recipes/${id}`);    
  }
}