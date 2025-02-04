import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { JobDetailComponent } from '../jobs/job-detail/job-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule
  ],
  declarations: [
    JobsPage,
    JobDetailComponent
  ]
})
export class JobsPageModule {}
