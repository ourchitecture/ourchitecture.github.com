import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrlItemComponent } from './url-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [UrlItemComponent],
  exports: [UrlItemComponent]
})
export class UrlItemComponentModule {}
