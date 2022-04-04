import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JioFormPageRoutingModule } from './jio-form-routing.module';

import { JioFormPage } from './jio-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JioFormPageRoutingModule
  ],
  declarations: [JioFormPage]
})
export class JioFormPageModule {}
