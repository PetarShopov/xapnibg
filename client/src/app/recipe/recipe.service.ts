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

	getRecipes(page, owner, selectedType): any {
		var url = `recipes/all?page=${page}`;
		if (owner !== 'no-owner') {
			url = `recipes/my-recipes/all?page=${page}&owner=${owner}`;
		}
		if (selectedType !== 'no-type') {
			url = `recipes/all?page=${page}&selectedType=${selectedType}`;
		}

		return this.httpService.get(url);
	}

	addRecipe(recipe): any {
		recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim());
		recipe.author = this.authService.getUser();
		return this.httpService.post('recipes/add', recipe, true);
	}

	editRecipe(recipe): any {
		if (!Array.isArray(recipe.ingredients)) {
			recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim());
		}
		return this.httpService.post('recipes/edit', recipe, true);
	}

	deleteRecipe(id): any {
		return this.httpService.post(`recipes/delete/${id}`, {}, true);
	}

	getRecipeById(id): Observable<RecipeModel> {
		return <Observable<RecipeModel>>this.httpService.get(`recipes/${id}`);
	}
}