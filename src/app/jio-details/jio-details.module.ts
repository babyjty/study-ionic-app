import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioDetailsPageRoutingModule } from './jio-details-routing.module';

import { JioDetailsPage } from './jio-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioDetailsPageRoutingModule
  ],
  declarations: [JioDetailsPage]
})
export class JioDetailsPageModule {}
