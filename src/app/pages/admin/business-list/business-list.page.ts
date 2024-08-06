import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Business } from './models/business.model';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.page.html',
  styleUrls: ['./business-list.page.scss'],
})
export class BusinessListPage implements OnInit {
  
  businesses: Business[] = [];


  constructor(
    private navCtrl: NavController
    ) {} 

  ngOnInit() {
    this.loadBusinesses()
  }

  loadBusinesses() {
    // Datos falsos para las empresas registradas
    this.businesses = [
      { id: 1, name: 'Manuela-Pichos', image: 'assets/img/pinchos.webp' },
      { id: 2, name: 'Manuela-Barbería', image: 'assets/img/barba.jpeg' },
      { id: 3, name: 'Manuela-Restaurante', image: 'assets/img/manuela.jpeg' },
    { id: 4, name: 'Manuela-Aluguel', image: 'assets/img/aluguel.jpeg' }
    ];
  }

  viewBusiness(business: Business) {
    // Navegar a la página de detalles del negocio
    this.navCtrl.navigateForward(`/business/business-detail/${business.id}`);
    console.log(business.id)
  }
  addBusiness(){
    
    this.navCtrl.navigateForward(['/business/business-labs'])
  
  }

}
