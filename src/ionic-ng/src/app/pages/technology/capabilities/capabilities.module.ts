import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapabilitiesPageRoutingModule } from './capabilities-routing.module';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { CapabilitiesPage } from './capabilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapabilitiesPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [CapabilitiesPage]
})
export class CapabilitiesPageModule {}
