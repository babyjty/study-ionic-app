import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatIndivPageRoutingModule } from './chat-indiv-routing.module';

import { ChatIndivPage } from './chat-indiv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatIndivPageRoutingModule
  ],
  declarations: [ChatIndivPage]
})
export class ChatIndivPageModule {}
