import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, AuthState } from '../auth/authentication.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'login',
    template: `
        <button *ngIf="!loggedIn" (click)="login()">Login</button>
        <button *ngIf="loggedIn" (click)="logout()">Logout</button>
        
    `
})
export class LoginComponent implements OnInit, OnDestroy {
    loggedIn: boolean;
    authChangeSubscription: Subscription;

    constructor(
        public authService: AuthenticationService
    ) {
        this.authChangeSubscription = authService.authChange.subscribe(
            newAuthState => this.loggedIn = (newAuthState === AuthState.LoggedIn)
        );
    }

    ngOnInit() { }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        console.log('destroyed');
        this.authChangeSubscription.unsubscribe();
    }
}