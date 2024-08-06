import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsPage } from './jobs.page';
import { JobDetailComponent } from './job-detail/job-detail.component'; // Asegúrate de importar correctamente el componente


const routes: Routes = [
  {
    path: '',
    component: JobsPage,
  },
  {
    path: ':id',
    component: JobDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
