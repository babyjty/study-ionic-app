import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioDetailsPendingPageRoutingModule } from './jio-details-pending-routing.module';

import { JioDetailsPendingPage } from './jio-details-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioDetailsPendingPageRoutingModule
  ],
  declarations: [JioDetailsPendingPage]
})
export class JioDetailsPendingPageModule {}
