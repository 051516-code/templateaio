import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplasScreenPage } from './splas-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SplasScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplasScreenPageRoutingModule {}
