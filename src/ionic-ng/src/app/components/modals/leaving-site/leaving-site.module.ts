import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavingSiteComponent } from './leaving-site.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [LeavingSiteComponent],
  exports: [LeavingSiteComponent]
})
export class LeavingSiteComponentModule {}
