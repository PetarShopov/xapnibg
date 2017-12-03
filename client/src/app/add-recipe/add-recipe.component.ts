import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service'
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
  model = new RecipeModel(null, '', '', [], '');
  submitted = false;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  onSubmit() {
    // this.submitted = true;
    this.recipeService.addRecipe(this.model)
    .subscribe(result => {
      var a = result;
      this.submitted = true;
      this.router.navigateByUrl(`/recipes/my-recipes`)
      // this.location.go('/recipes/my-recipes');
    });;
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
