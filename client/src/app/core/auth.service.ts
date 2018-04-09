import {Injectable} from '@angular/core'

@Injectable()
export class AuthService {
    saveUser(user) {
        window.localStorage.setItem('user', user);
    }

    getUser() {
        return window.localStorage.getItem('user')
    }

    removeUser() {
        window.localStorage.removeItem('user');
    }

    saveRole(role) {
        window.localStorage.setItem('role', role);
    }

    getRole() {
        return window.localStorage.getItem('role')
    }

    removeRole() {
        window.localStorage.removeItem('role');
    }

    authenticateUser(token) {
        window.localStorage.setItem('token', token);
    }

    isUserAuthenticated() {
        return window.localStorage.getItem('token') !== null;
    }

    deauthenticateUser() {
        return window.localStorage.removeItem('token');
    }

    getToken() {
        return window.localStorage.getItem('token');
    }
}