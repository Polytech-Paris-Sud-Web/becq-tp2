import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Article {
  title: string,
  content: string,
  author: string,
  date: string,
  id: number
}

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticle(id: number) {
    return this.http.delete(`http://localhost:3000/articles/${id}`) ;
  }

  public createArticle(article: { title: string; content: string; author: string; }) {
    return this.http.post(`http://localhost:3000/articles/`, {...article, date: Date()})
  }

  public getArticle(id: number) : Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
}
