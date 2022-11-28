import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuePageRoutingModule } from './value-routing.module';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { ValuePage } from './value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ValuePage]
})
export class ValuePageModule {}
