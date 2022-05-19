import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() title : string;
  @Input() content : string;
  @Input() id : number;
  @Input() date: string;
  @Output() deleteRequest = new EventEmitter<number>();

  constructor(){
    this.title = 'First Article';
    this.content = 'Hello World';
    this.date = '';
    this.id = -1;
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.id);
  }
}
