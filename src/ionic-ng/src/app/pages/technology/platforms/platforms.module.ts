import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatformsPageRoutingModule } from './platforms-routing.module';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { PlatformsPage } from './platforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatformsPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [PlatformsPage]
})
export class PlatformsPageModule {}
