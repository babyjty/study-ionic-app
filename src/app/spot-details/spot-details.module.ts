import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotDetailsPageRoutingModule } from './spot-details-routing.module';

import { SpotDetailsPage } from './spot-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotDetailsPageRoutingModule
  ],
  declarations: [SpotDetailsPage]
})
export class SpotDetailsPageModule {}
