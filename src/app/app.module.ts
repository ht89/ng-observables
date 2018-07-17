import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {ClickObserverComponent} from './click-observer/click-observer.component';
import {LoginComponent} from './auth/login.component';
import {AuthenticationService} from './auth/authentication.service';
import {NodeComponent} from 'app/node/node.component';
import {PubSubService} from 'app/node/publish-subscribe.service';
import {OuterComponent} from 'app/inner/outer.component';
import {InnerComponent} from 'app/inner/inner.component';
import {SearchComponent} from './autocomplete/search.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        ClickObserverComponent,
        LoginComponent,
        NodeComponent,
        OuterComponent,
        InnerComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AuthenticationService, PubSubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
