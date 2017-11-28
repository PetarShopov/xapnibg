import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RecipesData } from './core/data'
import { RecipeModel } from './models/recipe.model';
import 'rxjs/add/operator/delay';

@Injectable()
export class RecipeService {
  delayMs = 500;

  getRecipes(): Observable<RecipeModel[]> {
    return of(RecipesData.get()).delay(this.delayMs); // simulate latency with delay
  }

  addRecipe(): void {
    RecipesData.add(new RecipeModel(12,'1234', 'test', ['e','3'], 'sad','ivan', 123))
  }

  getRecipeById(id): Observable<RecipeModel> {
    return of(RecipesData.getById(id)).delay(this.delayMs);
  }
  // Fake server update; assume nothing can go wrong
  // updateHero(hero: Hero): Observable<Hero> {
  //   const oldHero = heroes.find(h => h.id === hero.id);
  //   const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
  //   return of(newHero).delay(this.delayMs); // simulate latency with delay
  // }
}