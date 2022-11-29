import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { ChannelsPageRoutingModule } from './channels-routing.module';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { ChannelsPage } from './channels.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CovalentCommonModule,
    CovalentMarkdownModule,
    ChannelsPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ChannelsPage]
})
export class ChannelsPageModule { }
