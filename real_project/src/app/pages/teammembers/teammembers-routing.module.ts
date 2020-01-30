import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeammembersPage } from './teammembers.page';

const routes: Routes = [
  {
    path: '',
    component: TeammembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeammembersPageRoutingModule {}
