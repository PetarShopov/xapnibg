import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipeService } from '../recipe/recipe.service';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  page: number = 1;
  recipes: Array<object> = [];
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['page'] || 1;
                this.getRecipes(this.page);
            })
    
  }

  getRecipes(page) {
    this.isLoading = true;
    this.recipeService.getRecipes(page, 'no-owner','no-type').subscribe(data => {
      this.recipes = data.recipes;
      this.isLoading = false;
    })
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }
    this.page = this.page - 1

    this.recipeService.getRecipes(this.page, 'no-owner','no-type').subscribe(data => {
      this.recipes = data.recipes;
      this.isLoading = false;
    })
  }

  nextPage() {
    if (this.recipes.length === 0 || this.recipes.length < 6) {
      return;
    }
    this.page = this.page + 1
    this.recipeService.getRecipes(this.page, 'no-owner','no-type').subscribe(data => {
      this.recipes = data.recipes;
      this.isLoading = false;
    })
  }

  private getUrl(page) {
    let url = `recipes/all?page=${page}`;
    return url;
  }
}
