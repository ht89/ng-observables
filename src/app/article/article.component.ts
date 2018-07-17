import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'article',
    template: `
        <h1>{{title}}</h1>
        <p>{{author}}</p>
    `
})
export class ArticleComponent implements OnInit {
    title: string;
    author: string;

    constructor(
        public http: Http
    ) {
        http.get('assets/articles.json')
            .map(res => res.json())
            .subscribe(
                article => {
                    this.title = article.title;
                    this.author = article.author;
                },
                error => console.error(error)
            );
     }

    ngOnInit() { }
}