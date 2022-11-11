import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { FooterComponentModule } from '../../components/page/footer/footer.module';

import { HomePageRoutingModule } from './home-routing.module';

import { LeavingSiteComponentModule } from '../../components/modals/leaving-site/leaving-site.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterComponentModule,
    LeavingSiteComponentModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
