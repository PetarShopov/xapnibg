import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';

import { ContactsService } from './contacts.service'
import { ResponseModel } from '../models/response.model';

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  model = new ResponseModel(null, '', '', '', '');

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) { }

  onSubmit() {
    this.contactsService.sendResponse(this.model)
      .subscribe(result => {
        this.router.navigateByUrl(`/`)
      });;
  }
}
