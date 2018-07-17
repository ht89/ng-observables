import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from './api.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'app-search',
    template: `
        <input [formControl]="queryField">
        <p *ngFor="let result of results">{{result}}</p>
    `,
    providers: [ApiService]
})

export class SearchComponent implements OnInit {
    results: Array<string> = [];
    queryField: FormControl = new FormControl();

    constructor(public apiService: ApiService) {
        this.queryField
            .valueChanges
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(query => this.apiService.search(query))
            .subscribe(result => this.results.push(result));
    }

    ngOnInit() {
    }
}
