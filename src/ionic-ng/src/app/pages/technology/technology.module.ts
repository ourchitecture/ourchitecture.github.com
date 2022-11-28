import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologyPageRoutingModule } from './technology-routing.module';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { TechnologyPage } from './technology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologyPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [TechnologyPage]
})
export class TechnologyPageModule {}
