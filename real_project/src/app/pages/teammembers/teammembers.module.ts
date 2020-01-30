import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeammembersPageRoutingModule } from './teammembers-routing.module';

import { TeammembersPage } from './teammembers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeammembersPageRoutingModule
  ],
  declarations: [TeammembersPage]
})
export class TeammembersPageModule {}
