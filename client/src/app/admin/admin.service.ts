import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

@Injectable()
export class AdminService {
  constructor(
    private httpService: HttpService
  ) { }

  getUsers(): any {
    return this.httpService.get('admin', true);
  }
}