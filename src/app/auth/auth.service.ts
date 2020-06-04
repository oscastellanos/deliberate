import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    constructor(private router: Router){}
    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*1000).toString()
        };
        this.authSuccessfully();
    }

    logIn(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*1000).toString()
        };
        this.authSuccessfully();
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/']);
    }

    getUser(){
        // returns a copy of the user, not a reference to the private object
        return { ...this.user};
    }

    isAuth(){
        return this.user != null;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
    }
}