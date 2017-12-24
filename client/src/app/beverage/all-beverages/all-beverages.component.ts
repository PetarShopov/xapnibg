import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { BeverageService } from '../beverage.service'
import { BeverageModel } from '../../models/beverage.model'

@Component({
  selector: 'app-all-beverages',
  templateUrl: './all-beverages.component.html',
  styleUrls: ['./all-beverages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllBeveragesComponent implements OnInit {
  beverages: Observable<BeverageModel[]>;

  constructor(
    private router: Router,
    private beverageService: BeverageService
  ) { }

  ngOnInit() {
    this.getBeverages();
  }

  getBeverages() {
    this.beverageService.getBeverages().subscribe(data => {
      this.beverages = data.beverages;
    })
  }

  openAddBeverage() {
    this.router.navigateByUrl('/beverages/add-beverage')
  }

}
