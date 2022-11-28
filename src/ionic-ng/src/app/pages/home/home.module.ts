import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { FooterComponent } from '../../components/page/footer/footer.component';

import { HomePageRoutingModule } from './home-routing.module';

import { BookItemComponent } from '../../components/list/book-item/book-item.component';
import { UrlItemComponent } from '../../components/list/url-item/url-item.component';
import { VideoItemComponent } from '../../components/list/video-item/video-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterComponent,
    BookItemComponent,
    UrlItemComponent,
    VideoItemComponent,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
