import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessEntryPageRoutingModule } from './business-entry-routing.module';

import { BusinessEntryPage } from './business-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessEntryPageRoutingModule
  ],
  declarations: [BusinessEntryPage]
})
export class BusinessEntryPageModule {}
