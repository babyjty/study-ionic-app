import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioDetailsAcceptPageRoutingModule } from './jio-details-accept-routing.module';

import { JioDetailsAcceptPage } from './jio-details-accept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioDetailsAcceptPageRoutingModule
  ],
  declarations: [JioDetailsAcceptPage]
})
export class JioDetailsAcceptPageModule {}
