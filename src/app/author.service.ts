import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Author {
  name: string,
  description: string
}

@Injectable()
export class AuthorService {

  constructor(private http : HttpClient) {
  }

  public getAuthor(name: string) : Observable<Author[]> {
    return this.http.get<Author[]>(`http://localhost:3000/authors?name=${name}`);
  }
}
