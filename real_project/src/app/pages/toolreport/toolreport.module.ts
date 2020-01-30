import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolreportPageRoutingModule } from './toolreport-routing.module';

import { ToolreportPage } from './toolreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolreportPageRoutingModule
  ],
  declarations: [ToolreportPage]
})
export class ToolreportPageModule {}
