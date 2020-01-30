import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamreportPage } from './teamreport.page';

const routes: Routes = [
  {
    path: '',
    component: TeamreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamreportPageRoutingModule {}
