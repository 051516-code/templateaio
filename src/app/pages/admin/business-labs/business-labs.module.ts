import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessLabsPageRoutingModule } from './business-labs-routing.module';

import { BusinessLabsPage } from './business-labs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessLabsPageRoutingModule
  ],
  declarations: [BusinessLabsPage]
})
export class BusinessLabsPageModule {}
