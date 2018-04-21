import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactsService } from './contacts.service'
import { ResponseModel } from '../models/response.model';

@Component({
	selector: 'contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
	contactsForm: FormGroup;

	constructor(
		private contactsService: ContactsService,
		private router: Router,
		private fb: FormBuilder
	) {
		this.createForm()
	}
	email = new FormControl('', [Validators.required, Validators.email]);

	types = [
		'Подобрение',
		'Забележка',
		'Проблем',
	];

	createForm() {
		this.contactsForm = this.fb.group({
			name: ['', Validators.required],
			email: this.email,
			subject: '',
			date: '',
			message: '',
			type: '',
			mark: ''
		});
	}

	getErrorMessage() {
		return this.contactsForm.controls.email.hasError('required') ? 'Моля въведете имейл' :
			this.contactsForm.controls.email.hasError('email') ? 'Моля въведете валиден имейл' :
				'';
	}
	onSubmit() {
		this.contactsService.sendResponse(this.contactsForm.value)
		  .subscribe(result => {
		    this.router.navigateByUrl(`/`)
		  });;
	}
}
