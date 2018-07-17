import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/concatMap";
import "rxjs/add/observable/of";

@Injectable()
export class ApiService {

    constructor(public http: Http) {
    }

    search(query: string): Observable<string> {
        return this.http
            .get('assets/response.json')
            .map(r => r.json()['prefix'] + query)
            // randomly delay response bw 0 and 1000ms
            .concatMap(
                x => Observable.of(x)
            );
    }
}