import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JioListPage } from './jio-list.page';

const routes: Routes = [
  {
    path: '',
    component: JioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JioListPageRoutingModule {}
