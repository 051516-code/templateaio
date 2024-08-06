import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../business-entry/business-entry.module').then(m => m.BusinessEntryPageModule)
  },
  {
    path: 'business-list',
    loadChildren: () => import('../business-list/business-list.module').then( m => m.BusinessListPageModule)
  },
  {
    path: 'business-labs',
    loadChildren: () => import('../business-labs/business-labs.module').then( m => m.BusinessLabsPageModule )
  },
  {
    path: 'business-detail/:id',
    loadChildren: () => import('../business-detail/business-detail.module').then( m => m.BusinessDetailPageModule)
  },
  {
    path: '**',
    redirectTo: 'business-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingPageRoutingModule {}
