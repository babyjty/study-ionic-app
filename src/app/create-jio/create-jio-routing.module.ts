import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateJioPage } from './create-jio.page';

const routes: Routes = [
  {
    path: '',
    component: CreateJioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateJioPageRoutingModule {}
