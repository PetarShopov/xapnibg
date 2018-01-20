import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

import { Observable } from 'rxjs/Observable';
import { RecipeModel } from '../models/recipe.model';
import { AuthService } from '../core/auth.service';

@Injectable()
export class RecipeService {
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }

  getRecipes(page, owner): any {
    var url = `recipes/all?page=${page}`;
    if (owner !== 'no-owner') {
      url = `recipes/my-recipes/all?page=${page}&owner=${owner}`;
    }
    
    return this.httpService.get(url);
  }

  addRecipe(recipe): any {
    recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim());
    recipe.author = this.authService.getUser();
    return this.httpService.post('recipes/add', recipe);
  }

  deleteRecipe(id): any {
    return this.httpService.post(`recipes/delete/${id}`, {});
  }

  getRecipeById(id): Observable<RecipeModel> {
    return this.httpService.get(`recipes/${id}`);
  }
}