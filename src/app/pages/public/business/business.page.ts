import { Component, OnInit } from '@angular/core';
import { Business } from './models/business.model';
import { BusinessService } from './services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  companies : Business[] = []


  constructor(
    private businesServices : BusinessService
  ) { }

  ngOnInit() {
    this.companies = this.businesServices.getAllBusinesses();
  }

  openCompany(company? : any) {
    // Lógica para abrir la empresa, podría ser navegar a otra página o mostrar más detalles
    console.log('Empresa seleccionada:', company);
  }

}
