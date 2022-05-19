import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from "./article.service";
import { HttpClientModule } from "@angular/common/http";
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import {AuthorService} from "./author.service";

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'author/:name', component: AuthorComponent },
  { path: '', component: ArticlesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleHeaderComponent,
    HomeComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only
  ],
  providers: [ArticleService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
