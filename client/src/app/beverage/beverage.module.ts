import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AllBeveragesComponent } from './all-beverages/all-beverages.component';
import { AddBeverageComponent } from './add-beverage/add-beverage.component';
import { BeverageService } from './beverage.service'
import { HighlightDirective } from '../directives/highlight.directive';
import { BlackWhiteImageDirective } from '../directives/black-white-image.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AllBeveragesComponent, 
    AddBeverageComponent,
    HighlightDirective,
    BlackWhiteImageDirective
  ],
  providers: [BeverageService]
})
export class BeverageModule { }
