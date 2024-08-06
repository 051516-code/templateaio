import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-business-entry',
  templateUrl: './business-entry.page.html',
  styleUrls: ['./business-entry.page.scss'],
})
export class BusinessEntryPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToVideo() {
    // Simula ir al video explicativo
    this.navCtrl.navigateForward('/business/video');
  }

  goToList() {
    // Redirige a la home de empresas
    this.navCtrl.navigateForward('business/business-list');
  }
}
