import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { recipes } from './core/data'
import { RecipeModel } from './models/recipe.model';
import 'rxjs/add/operator/delay';

@Injectable()
export class RecipeService {
  delayMs = 500;

  getRecipes(): Observable<RecipeModel[]> {
    return of(recipes).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  // updateHero(hero: Hero): Observable<Hero> {
  //   const oldHero = heroes.find(h => h.id === hero.id);
  //   const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
  //   return of(newHero).delay(this.delayMs); // simulate latency with delay
  // }
}