import { Component, OnInit } from '@angular/core';
import {Article, ArticleService} from "../article.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  displayArticles: Article[] | undefined;
  articlesSubscription: Subscription | undefined;

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  updateArticles(): void {
  this.displayArticles = this.articles.sort((a, b) => ('' + a.date).localeCompare(b.date)).slice(0, 10);
}

  delete(id: number) {
    this.articleService.deleteArticle(id).subscribe({
      next: () => {
        this.articlesSubscription = this.articleService.getArticles().subscribe(
          {
            next: value => this.articles = value
          }
        );
      }
    });
    this.updateArticles();
  }

  ngOnInit() {
    this.articlesSubscription = this.articleService.getArticles().subscribe(
      {
        next: value => {
          this.articles = value;
          this.updateArticles();
        }
      }
    );
  }
}
