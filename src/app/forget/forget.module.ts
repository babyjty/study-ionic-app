import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPageRoutingModule } from './forget-routing.module';

import { ForgetPage } from './forget.page';
import { ErrorMessageModule } from '../components/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPageRoutingModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ],
  declarations: [ForgetPage]
})
export class ForgetPageModule {}
