import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalRegisterPage } from './external-register.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalRegisterPageRoutingModule {}
