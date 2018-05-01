import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service'

import { map, tap } from 'rxjs/operators';

// const baseUrl = 'https://xapnibg-server.herokuapp.com/'
const baseUrl = 'http://localhost:1337/'
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    get(url, authenicated = false) {
        return this.http
            .get(`${baseUrl}${url}`, this.httpOptions)
            .pipe()

    }

    post(url, data, authenicated = false) {
        return this.http
            .post(`${baseUrl}${url}`, data, this.httpOptions)
            .pipe()
    }
}