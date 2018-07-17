import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {NextObserver} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class PubSubService {
    publishSubscribeSubject: Subject<any> = new Subject();
    emitter: Observable<any>;

    constructor() {
        this.emitter = this.publishSubscribeSubject.asObservable();
    }

    publish(channel: string, event: any): void {
        this.publishSubscribeSubject.next({
            channel: channel,
            event: event
        });
    }

    subscribe(channel: string, handler: ((value: any) => void)): Subscription {
        return this.emitter
            .filter(emission => emission.channel === channel)
            .map(emission => emission.event)
            .subscribe(handler);
    }

}