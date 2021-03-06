import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'
import { Subject ,  Observable } from 'rxjs';
import { LoginUserModel } from './models/login-user.model';

@Injectable()
export class UsersService {
    subject = new Subject();

    constructor(private httpService: HttpService) { }

    auth(): Observable<Object> {
        return this.subject;
    }

    finishLogin() {
        this.subject.next(true);
    }

    register(user) {
        return this.httpService.post('users/register', user)
    }

    login(user) {
        return this.httpService.post('users/login', user)
    }

    logout() {

    }

    getAnalyticsData() {
        return this.httpService.get('analytics')
    }
}