import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles: any[] = [];

  constructor(private http: HttpClient) { 

    this.getArticles();
  }

  getArticles(){
    this.http.get("http://127.0.0.1:8000/article").subscribe((resultData: any)=>
    {
      this.articles = resultData;
    });
  }
}
