import { Injectable } from '@angular/core';
import { Business } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private businesses: Business[] = [
  
    {
      id: 1,
      name: 'Manuela pinchos',
      category: 'Comida',
      description: 'Descripción del negocio 1...',
      info: 'Abierto hasta las 8 PM',
      imageUrl: 'assets/img/pinchos.webp'
    },
    {
      id: 2,
      name: 'Alseo Churrascos',
      category: 'Comida',
      description: 'Descripción del negocio 1...',
      info: 'Abierto hasta las 9 PM',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Empresa 3',
      category: 'Category 3',
      description: 'Descripción del negocio 1...',
      info: 'Abierto hasta las 10 PM',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Empresa 4',
      category: 'Category 4',
      description: 'Descripción del negocio 1...',
      info: 'Abierto hasta las 11 PM',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  getAllBusinesses(): Business[] {
    return this.businesses;
  }

  getBusinessById(id: number): Business | undefined {
    return this.businesses.find(business => business.id === id);
  }
}
