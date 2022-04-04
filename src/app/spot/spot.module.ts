import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpotPage } from './spot.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SpotPageRoutingModule } from './spot-routing.module';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SpotPageRoutingModule,
    OrderModule
  ],
  declarations: [SpotPage]
})
export class SpotPageModule {}
