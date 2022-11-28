import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelsPageRoutingModule } from './channels-routing.module';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { ChannelsPage } from './channels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChannelsPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ChannelsPage]
})
export class ChannelsPageModule {}
