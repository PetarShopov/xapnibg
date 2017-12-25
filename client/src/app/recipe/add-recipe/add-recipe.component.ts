import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { RecipeService } from '../recipe.service'
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
  model = new RecipeModel(null, '', '', [], '');

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  onSubmit() {
    this.recipeService.addRecipe(this.model)
      .subscribe(result => {
        this.router.navigateByUrl(`/recipes/my-recipes`)
      });;
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
