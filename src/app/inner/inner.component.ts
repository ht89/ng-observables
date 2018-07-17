import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'inner',
    template: `
        <p>{{value}}</p>
    `
})
export class InnerComponent implements OnInit {
    @Input() value: number;

    constructor() { }

    ngOnInit() { 

    }

}