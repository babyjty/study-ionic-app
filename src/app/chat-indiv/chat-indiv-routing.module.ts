import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatIndivPage } from './chat-indiv.page';

const routes: Routes = [
  {
    path: '',
    component: ChatIndivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatIndivPageRoutingModule {}
