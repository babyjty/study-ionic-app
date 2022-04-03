import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JioFormPage } from './jio-form.page';

const routes: Routes = [
  {
    path: '',
    component: JioFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JioFormPageRoutingModule {}
