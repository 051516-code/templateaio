import { Injectable } from '@angular/core';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    
  private news: News[] = [
    { id: 1, title: 'Título de Noticia 1', content: 'Contenido de la noticia 1...', imageUrl: '...' },
    { id: 2, title: 'Título de Noticia 2', content: 'Contenido de la noticia 2...', imageUrl: '...' },
    { id: 3, title: 'Título de Noticia 3', content: 'Contenido de la noticia 3...', imageUrl: '...' },
    // Agregar más noticias según sea necesario
  ];

  constructor() { }

  getAllNews(): News[] {
    return this.news;
  }

  getNewsById(id: number): News | undefined {
    return this.news.find(news => news.id === id);
  }
}
