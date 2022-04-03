import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateJioPageRoutingModule } from './create-jio-routing.module';

import { CreateJioPage } from './create-jio.page';
import { ErrorMessageModule } from '../components/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateJioPageRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  declarations: [CreateJioPage]
})
export class CreateJioPageModule {}
