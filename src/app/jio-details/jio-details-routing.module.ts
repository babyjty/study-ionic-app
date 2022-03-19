import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JioDetailsPage } from './jio-details.page';

const routes: Routes = [
  {
    path: '',
    component: JioDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JioDetailsPageRoutingModule {}
