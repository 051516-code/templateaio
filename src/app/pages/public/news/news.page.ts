import { Component, OnInit } from '@angular/core';
import { News } from './models/news.model';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService
    ) { }

  ngOnInit() {
    this.newsList = this.newsService.getAllNews();
  }

  // Otros métodos y lógica de la página...
}
