import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessLabsPage } from './business-labs.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessLabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessLabsPageRoutingModule {}
