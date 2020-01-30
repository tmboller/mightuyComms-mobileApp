import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolreportPage } from './toolreport.page';

const routes: Routes = [
  {
    path: '',
    component: ToolreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolreportPageRoutingModule {}
