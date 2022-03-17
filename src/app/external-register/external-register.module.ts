import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalRegisterPageRoutingModule } from './external-register-routing.module';

import { ExternalRegisterPage } from './external-register.page';
import { ErrorMessageModule } from '../components/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalRegisterPageRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  declarations: [ExternalRegisterPage]
})
export class ExternalRegisterPageModule {}
