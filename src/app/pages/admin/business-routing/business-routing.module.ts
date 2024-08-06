import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessRoutingPageRoutingModule } from './business-routing-routing.module';

import { BusinessRoutingPage } from './business-routing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessRoutingPageRoutingModule
  ],
  declarations: [BusinessRoutingPage]
})
export class BusinessRoutingPageModule {}
