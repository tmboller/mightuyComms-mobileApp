import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [{

      path: 'dashboard',
      loadChildren: () => 
      import ('../pages/dashboard/dashboard.module').then(
        m => m.DashboardPageModule
      )

    },
    {
      path: 'teams',
      loadChildren: () => 
      import ('../pages/teams/teams.module').then(
        m => m.TeamsPageModule
      )
    },
    {
      path: 'tools',
      loadChildren: () => 
      import ('../pages/tools/tools.module').then(
        m => m.ToolsPageModule
      )
    },
    {
      path: 'scanner',
      loadChildren: () => 
      import ('../pages/scanner/scanner.module').then(
        m => m.ScannerPageModule
      )
    },
    {
      path: 'sales',
      loadChildren: () => 
      import ('../pages/sales/sales.module').then(
        m => m.SalesPageModule
      )
    }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
