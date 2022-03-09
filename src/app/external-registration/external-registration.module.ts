import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalRegistrationPageRoutingModule } from './external-registration-routing.module';

import { ExternalRegistrationPage } from './external-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalRegistrationPageRoutingModule
  ],
  declarations: [ExternalRegistrationPage]
})
export class ExternalRegistrationPageModule {}
