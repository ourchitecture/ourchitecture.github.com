import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { FooterComponent } from '../../components/page/footer/footer.component';

import { HomePageRoutingModule } from './home-routing.module';

import { BookItemComponentModule } from '../../components/list/book-item/book-item.module';
import { UrlItemComponentModule } from '../../components/list/url-item/url-item.module';
import { VideoItemComponentModule } from '../../components/list/video-item/video-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterComponent,
    BookItemComponentModule,
    UrlItemComponentModule,
    VideoItemComponentModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
