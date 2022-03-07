import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JioPage } from './jio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JioPageRoutingModule } from './jio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: JioPage }]),
    JioPageRoutingModule,
  ],
  declarations: [JioPage]
})
export class JioPageModule {}
