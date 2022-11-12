import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SafePipe],
  exports: [SafePipe]
})
export class SafePipeModule {}
