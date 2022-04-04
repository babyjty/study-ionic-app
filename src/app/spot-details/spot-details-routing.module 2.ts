import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotDetailsPage } from './spot-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpotDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotDetailsPageRoutingModule {}
