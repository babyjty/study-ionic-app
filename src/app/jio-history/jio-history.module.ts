import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioHistoryPageRoutingModule } from './jio-history-routing.module';

import { JioHistoryPage } from './jio-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioHistoryPageRoutingModule
  ],
  declarations: [JioHistoryPage]
})
export class JioHistoryPageModule {}
