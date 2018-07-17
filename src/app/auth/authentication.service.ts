import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
    authState: AuthState;
    authManager: BehaviorSubject<AuthState> = new BehaviorSubject(AuthState.LoggedOut);
    authChange: Observable<AuthState>;

    constructor() {
        this.authChange = this.authManager.asObservable();
    }

    setAuthState(newAuthState: AuthState): void {
        this.authState = newAuthState;
        this.authManager.next(this.authState);
    }

    login(): void {
        this.setAuthState(AuthState.LoggedIn);
    }

    logout(): void {
        this.setAuthState(AuthState.LoggedOut);
    }



}

export const enum AuthState {
    LoggedIn,
    LoggedOut
}