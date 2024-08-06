import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessEntryPage } from './business-entry.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessEntryPageRoutingModule {}
