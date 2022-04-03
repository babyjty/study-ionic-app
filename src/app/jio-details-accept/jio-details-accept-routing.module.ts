import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JioDetailsAcceptPage } from './jio-details-accept.page';

const routes: Routes = [
  {
    path: '',
    component: JioDetailsAcceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JioDetailsAcceptPageRoutingModule {}
