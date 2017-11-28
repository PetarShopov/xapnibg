import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor(private recipeService: RecipeService) { }

  onSubmit() {
    this.submitted = true;
    this.recipeService.addRecipe();
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
