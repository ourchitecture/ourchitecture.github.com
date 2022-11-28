import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesPageRoutingModule } from './experiences-routing.module';

import { HeaderComponent } from '../../../components/page/header/header.component';
import { FooterComponent } from '../../../components/page/footer/footer.component';

import { ExperiencesPage } from './experiences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencesPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ExperiencesPage]
})
export class ExperiencesPageModule {}
