import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service'
import { RecipeModel } from '../../models/recipe.model';
import { DialogService }  from '../../dialog.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditRecipeComponent implements OnInit {
  recipe = new RecipeModel(null, '', '', [], '', '');

  constructor(
    private recipeService: RecipeService,
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  onSubmit() {
    var a = this.recipe
    this.recipeService.editRecipe(this.recipe)
      .subscribe(result => {
        this.router.navigateByUrl(`/recipes/my-recipes/all`)
      });;
  }

  goBack(): void {
    this.location.back();
  }
}
