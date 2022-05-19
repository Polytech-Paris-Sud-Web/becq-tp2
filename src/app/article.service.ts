import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../environments/environment";

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
    return this.http.get<Article[]>(environment.bddPath + "articles");
  }

  public deleteArticle(id: number) {
    return this.http.delete(environment.bddPath + `articles/${id}`) ;
  }

  public createArticle(article: { title: string; content: string; author: string; }) {
    return this.http.post(environment.bddPath + `articles/`, {...article, date: Date()})
  }

  public getArticle(id: number) : Observable<Article> {
    return this.http.get<Article>(environment.bddPath + `articles/${id}`);
  }
}
