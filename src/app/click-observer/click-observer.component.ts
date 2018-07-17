import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'click-observer',
    template: `
        <button #btn>Emit Event</button>
        <p *ngFor="let click of clicks; let i = index">{{ i }}: {{ click }}</p>
    `
})
export class ClickObserverComponent implements OnInit, AfterViewInit {
    clicks: Array<Event> = [];
    clickEmitter: Observable<Event>;
    @ViewChild('btn') btn;

    constructor() { 
    }


    ngOnInit() { }

    ngAfterViewInit() {
        this.clickEmitter = Observable.fromEvent(this.btn.nativeElement, 'click');
        this.clickEmitter.subscribe(clickEvent => this.clicks.push(clickEvent));
    }
}