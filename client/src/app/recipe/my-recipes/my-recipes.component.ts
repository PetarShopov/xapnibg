import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../models/recipe.model'
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyRecipesComponent implements OnInit {
  page: number = 1;
  recipes: Array<object> = [];
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;
        this.getRecipes(this.page);
      })
  }

  openAddRecipe() {
    this.router.navigateByUrl('/recipes/add-recipe')
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id).subscribe(result => {
      this.router.navigateByUrl('/recipes/my-recipes/all')
    })
  }

  getRecipes(page) {
    this.isLoading = true;
    let currentUser = this.authService.getUser();
    let a = 1;
    this.recipeService.getRecipes(page, currentUser, 'no-type').subscribe(data => {
      this.recipes = data.recipes;
      this.isLoading = false;
    })
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    const url = this.getUrl(this.page - 1)
    this.router.navigateByUrl(url)
  }

  nextPage() {
    if (this.recipes.length === 0 || this.recipes.length < 6) {
      return;
    }

    const url = this.getUrl(this.page + 1)
    this.router.navigateByUrl(url)
  }

  private getUrl(page) {
    let currentUser = this.authService.getUser();
    let url = `recipes/my-recipes/all?page=${page}&owner=${currentUser}`;
    return url;
  }
}
