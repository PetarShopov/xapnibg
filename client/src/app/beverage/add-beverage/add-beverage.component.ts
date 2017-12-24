import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { BeverageService } from '../beverage.service'

@Component({
  selector: 'app-add-beverage',
  templateUrl: './add-beverage.component.html',
  styleUrls: ['./add-beverage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBeverageComponent implements OnInit {
  beverageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private beverageService: BeverageService,
    private router: Router) {
    this.createForm()
  }

  createForm() {
    this.beverageForm = this.fb.group({
      name: ['', Validators.required],
      preparation: '',
      preparationTime: '',
      ingredients: '',
      image: ''
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    const formModel = this.beverageForm.value;
    this.beverageService.addBeverage(formModel)
      .subscribe(result => {
        // this.submitted = true;
        this.router.navigateByUrl(`/beverages/all`)
      });;
    var a = 1;
  }
}
