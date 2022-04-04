import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPopupComponent } from 'src/app/components/error-popup/error-popup.component';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorPopupComponent],
  declarations: [ErrorPopupComponent]
})
export class ErrorPopupModule {}
