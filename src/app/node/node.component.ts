import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PubSubService } from './publish-subscribe.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'node',
    template: `
        <p>Heard {{ count }} of {{ subscribeChannel }}</p>
        <button (click)="send()">Send {{ publishChannel }}</button>
    `
})
export class NodeComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() publishChannel: string;
    @Input() subscribeChannel: string;
    count = 0;
    pubSubServiceSubscription: Subscription;

    constructor(
        public pubSubService: PubSubService
    ) { }

    ngOnInit() {}

    send() {
        this.pubSubService.publish(this.publishChannel, {});
    }

    ngAfterViewInit() {
        this.pubSubService.subscribe(this.subscribeChannel, event => ++this.count);
    }

    ngOnDestroy() {
        this.pubSubServiceSubscription.unsubscribe();
    }

}