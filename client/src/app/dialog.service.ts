
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DialogService {
  
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return Observable.create(confirmation);
  };
}