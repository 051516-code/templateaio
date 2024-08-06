import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'business',
        loadChildren: () => import('../business/business.module').then(m => m.BusinessPageModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'module/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
