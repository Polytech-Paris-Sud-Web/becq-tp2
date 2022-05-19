import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article, ArticleService} from "../article.service";
import {ActivatedRoute } from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article?: Article;
  articleSubscription: Subscription | undefined;
  id: number;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  delete(id: number) {
    this.articleService.deleteArticle(id).subscribe();
  }

  ngOnInit(): void {
    this.articleSubscription = this.articleService.getArticle(this.id).subscribe(
      {
        next: (value) => {
          console.log(value);
          this.article = value;
        }
      }
    );
  }
}
