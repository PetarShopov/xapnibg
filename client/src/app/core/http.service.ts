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

    get(url, authenicated = false) {
        const httpOptions = this.getHttpOptions(getMethod, authenicated);

        return this.http
            .get(`${baseUrl}${url}`, httpOptions)
            .pipe()
            
    }

    post(url, data, authenicated = false) {
        const httpOptions = this.getHttpOptions(postMethod, authenicated);

        return this.http
            .post(`${baseUrl}${url}`, data, httpOptions)
            .pipe()
    }

    private getHttpOptions(method, authenicated) {
        let httpOptions = {};
        if (authenicated) {
            const token = this.authService.getToken()
            httpOptions = {
                headers: new HttpHeaders({ 
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${token}` 
                })
            }
        } else {
            httpOptions = {
                headers: new HttpHeaders({ 
                    'Content-Type': 'application/json'
                })
            }
        }

        return httpOptions;
    }
}