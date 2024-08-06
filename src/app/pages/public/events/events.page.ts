import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { Router } from '@angular/router';
import { Event } from './models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events : Event[] = [];

  constructor(
    private router: Router,
    private eventService : EventService
  ) { }

  ngOnInit(){
    this.events = this.eventService.getAllEvents()
    
   
  }

  openEvent(event? : any) {
    // Lógica para abrir el evento, podría ser navegar a otra página o mostrar más detalles
    console.log('Evento seleccionado:', event);
  }
}
