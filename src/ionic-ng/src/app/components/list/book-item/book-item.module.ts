import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookItemComponent } from './book-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [BookItemComponent],
  exports: [BookItemComponent]
})
export class BookItemComponentModule {}
