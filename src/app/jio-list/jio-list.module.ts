import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioListPageRoutingModule } from './jio-list-routing.module';

import { JioListPage } from './jio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioListPageRoutingModule
  ],
  declarations: [JioListPage]
})
export class JioListPageModule {}
