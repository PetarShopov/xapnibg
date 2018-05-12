import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

import { RecipeService } from '../recipe.service'
import { RecipeModel } from '../../models/recipe.model';
import { DialogService } from '../../dialog.service';

@Component({
	selector: 'app-add-recipe',
	templateUrl: './add-recipe.component.html',
	styleUrls: ['./add-recipe.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
	model = new RecipeModel(null, '', '', [], '', '');

	constructor(
		private recipeService: RecipeService,
		private dialogService: DialogService,
		private router: Router
	) { }

	onSubmit() {
		this.recipeService.addRecipe(this.model)
			.subscribe(result => {
				this.router.navigateByUrl(`/recipes/my-recipes/all`)
			});;
	}
	get diagnostic() { return JSON.stringify(this.model); }

	ngOnInit() {
	}

	canDeactivate(): Observable<boolean> | boolean {
		if (this.model.title && this.model.image && this.model.ingredients && this.model.preparation && this.model.type) {
			return true;
		}
		return this.dialogService.confirm('Discard changes?');
	}

}
