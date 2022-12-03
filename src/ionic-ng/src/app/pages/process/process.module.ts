import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { HeaderComponent } from '../../components/page/header/header.component';
import { FooterComponent } from '../../components/page/footer/footer.component';

import { BookItemComponent } from '../../components/list/book-item/book-item.component';
import { UrlItemComponent } from '../../components/list/url-item/url-item.component';
import { VideoItemComponent } from '../../components/list/video-item/video-item.component';

import { ProcessPage } from './process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPageRoutingModule,
    BookItemComponent,
    UrlItemComponent,
    VideoItemComponent,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [ProcessPage],
})
export class ProcessPageModule {}
