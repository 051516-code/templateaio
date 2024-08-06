import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessDetailPage } from './business-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessDetailPage,
    children: [
      {
        path: 'feedback',
        loadChildren: () => import('../business-feedback/business-feedback.module').then( m => m.BusinessFeedbackPageModule)
      },
      {
        path: '',
        redirectTo: 'feedback',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessDetailPageRoutingModule {}
