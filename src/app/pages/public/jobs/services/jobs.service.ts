import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  private jobs: Job[] = [
    {
      id: 1,
      title: 'Electricista a domicilio',
      description: 'Servicio de reparación eléctrica para hogares y oficinas. Disponible 24/7.',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    {
      id: 2,
      title: 'Clases de Matemáticas',
      description: 'Tutorías de matemáticas para estudiantes de primaria y secundaria. Sesiones presenciales y en línea.',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    {
      id: 3,
      title: 'Jardinería y Paisajismo',
      description: 'Diseño y mantenimiento de jardines. Servicios de poda, riego y fertilización.',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    {
      id: 4,
      title: 'Reparación de Electrodomésticos',
      description: 'Reparación de electrodomésticos grandes y pequeños. Garantía en todos los trabajos.',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    {
      id: 5,
      title: 'Paseo de Perros',
      description: 'Servicio de paseo y cuidado de perros. Tarifas por hora y disponibilidad flexible.',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    }
  ];

  constructor() { }

  getJobs(): Job[] {
    return this.jobs;
  }

  getJobById(id: number): Job | undefined {
    return this.jobs.find(job => job.id === id);
  }
}
