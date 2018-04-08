import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

import { Observable } from 'rxjs/Observable';
import { RecipeModel } from '../models/recipe.model';
import { AuthService } from '../core/auth.service';

@Injectable()
export class ContactsService {
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }

  sendResponse(response): any {
    return this.httpService.post('contacts/response', response, true);
  }
}