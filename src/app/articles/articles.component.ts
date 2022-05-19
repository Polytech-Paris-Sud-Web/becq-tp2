import { Component, OnInit } from '@angular/core';
import {Article, ArticleService} from "../article.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  displayArticles: Article[] | undefined;
  articlesSubscription: Subscription | undefined;
  filters: string;

  constructor(private articleService: ArticleService) {
    this.filters = '';
    this.articles = [];
  }

  filter(filterValue: string) {
    this.filters = filterValue;
    this.updateArticles()
  }

  updateArticles(): void {
    if (this.filters.length) {
      this.displayArticles = this.articles.filter((a: Article) => {
        return a.title.toLowerCase().includes(this.filters.toLowerCase())
          || a.content.toLowerCase().includes(this.filters.toLowerCase())
      })
    } else {
      this.displayArticles = this.articles;
    }
    this.displayArticles = this.displayArticles.sort((a, b) => ('' + a.date).localeCompare(b.date));
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
