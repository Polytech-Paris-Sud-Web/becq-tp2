import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Author, AuthorService} from "../author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author?: Author;
  authorSubscription : Subscription | undefined;
  name: string;

  constructor(
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.authorSubscription = this.authorService.getAuthor(this.name).subscribe(
      {
        next: (value) => {
          console.log(value);
          this.author = value[0];
        }
      }
    );
  }
}
