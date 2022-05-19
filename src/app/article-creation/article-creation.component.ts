import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Article, ArticleService} from "../article.service";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm : FormGroup;

  @Output() updateRequest = new EventEmitter<Article>();

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }


  createArticle() {
    const { title, content, author } = this.articleForm.value,
           newArticle = {
              title,
              content,
              author
            };

      this.articleService.createArticle(newArticle).subscribe();
  }
}
