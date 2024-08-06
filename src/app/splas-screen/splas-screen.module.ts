import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplasScreenPageRoutingModule } from './splas-screen-routing.module';

import { SplasScreenPage } from './splas-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplasScreenPageRoutingModule
  ],
  declarations: [SplasScreenPage]
})
export class SplasScreenPageModule {}
