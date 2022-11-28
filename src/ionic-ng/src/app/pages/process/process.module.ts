import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { ProcessPage } from './process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPageRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ProcessPage]
})
export class ProcessPageModule {}
