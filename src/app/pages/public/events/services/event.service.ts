import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      type: 'Concurso',
      title: 'Concurso de Fotografía 5',
      description: 'Participa en nuestro concurso de fotografía y gana premios.',
      date: '25/07/2024',
      location: 'Parque Central',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      type: 'Fiesta',
      title: 'Fiesta de la Cerveza',
      description: 'Disfruta de las mejores cervezas artesanales.',
      date: '30/07/2024',
      location: 'Plaza Mayor',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      type: 'Música en Vivo',
      title: 'Concierto de Rock',
      description: 'Bandas locales tocando en vivo.',
      date: '01/08/2024',
      location: 'Bar La Esquina',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      type: 'Bar',
      title: 'Bar El Buen Sabor',
      description: 'Abierto hasta las 2 AM.',
      date: 'Todos los días',
      location: 'Calle Principal 123',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }
}
