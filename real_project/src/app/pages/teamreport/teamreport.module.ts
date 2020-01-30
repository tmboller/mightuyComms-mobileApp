import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamreportPageRoutingModule } from './teamreport-routing.module';

import { TeamreportPage } from './teamreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamreportPageRoutingModule
  ],
  declarations: [TeamreportPage]
})
export class TeamreportPageModule {}
