import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JioDetailsPendingPage } from './jio-details-pending.page';

const routes: Routes = [
  {
    path: '',
    component: JioDetailsPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JioDetailsPendingPageRoutingModule {}
