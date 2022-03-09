import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalRegistrationPage } from './external-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalRegistrationPageRoutingModule {}
