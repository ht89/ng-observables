import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { InnerComponent } from 'app/inner/inner.component';

@Component({
    selector: 'outer',
    template: `
        <button (click)="add()">More</button>
        <button (click)="remove()">Less</button>
        <button (click)="shuffle()">Shuffle</button>
        <inner *ngFor="let i of list"
                [value]="i">
        </inner>
        <p>Value of last: {{ lastVal }}</p>        
    `
})
export class OuterComponent implements OnInit, AfterViewInit {
    list: Array<number> = [];
    @ViewChildren(InnerComponent) innerComponents: QueryList<InnerComponent>;
    lastVal: number;

    constructor(
        public changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() { 

    }

    add(): void {
        this.list.push(this.list.length);
    }

    remove(): void {
        this.list.pop();
    }

    shuffle(): void {
        this.list = this.list.sort(() => (4 * Math.random() > 2) ? 1: -1);
    }

    ngAfterViewInit() {
        this.innerComponents.changes
            .subscribe(e => {
                this.lastVal = (e.last || {}).value;
                this.changeDetectorRef.detectChanges();
            });
    }
}