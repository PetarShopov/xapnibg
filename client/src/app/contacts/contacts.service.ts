import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

@Injectable()
export class ContactsService {
  constructor(
    private httpService: HttpService
  ) { }

  sendResponse(response): any {
    return this.httpService.post('contacts/response', response, true);
  }
}