import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JioPage } from './jio.page';

const routes: Routes = [
  {
    path: '',
    component: JioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JioPageRoutingModule {}
