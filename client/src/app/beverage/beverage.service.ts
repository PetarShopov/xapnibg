import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

import { Observable } from 'rxjs/Observable';
import { BeverageModel } from '../models/beverage.model';

@Injectable()
export class BeverageService {
  constructor(private httpService: HttpService) { }
  
  getBeverages(): any {
    return this.httpService.get('beverages/all');
  }

  addBeverage(beverage): any {
    beverage.ingredients = beverage.ingredients.split(',').map(item => item.trim())
    return this.httpService.post('beverages/add', beverage, true);
  }

  getBeverageById(id): Observable<BeverageModel> {
    return this.httpService.get(`beverages/${id}`);    
  }
}