import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoItemComponent } from './video-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [VideoItemComponent],
  exports: [VideoItemComponent]
})
export class VideoItemComponentModule {}
